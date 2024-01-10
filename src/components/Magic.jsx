import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import React, { useRef, useEffect, useState } from "react";

const HandGestureDetection = () => {
  const videoRef = useRef();
  const streamRef = useRef();
  const [model, setModel] = useState(null);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [isDetectionStarted, setIsDetectionStarted] = useState(false);
  const detectionTimeoutRef = useRef(); // Reference to store the timeout ID

  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await handpose.load(); // Load the handpose model
      setModel(loadedModel);
    };
    loadModel();
  }, []);

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      videoRef.current.srcObject = stream;
      videoRef.current.addEventListener("loadeddata", () => {
        videoRef.current.play();
        setPermissionDenied(false);
        setIsDetectionStarted(true);
      });
    } catch (error) {
      console.error("Error accessing the webcam: ", error);
      setPermissionDenied(true);
    }
  };

  const stopVideo = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    if (detectionTimeoutRef.current) {
      clearTimeout(detectionTimeoutRef.current); // Cancel the ongoing detection loop
    }
    setIsDetectionStarted(false);
    setPermissionDenied(false);
  };

  const detect = async () => {
    if (
      videoRef.current &&
      model &&
      isDetectionStarted &&
      videoRef.current.videoWidth > 0 &&
      videoRef.current.videoHeight > 0
    ) {
      const predictions = await model.estimateHands(videoRef.current);
      if (predictions.length > 0) {
        console.log(predictions);
        const fingers = analyzeFingers(predictions[0].landmarks);
        console.log(fingers);
      }
      detectionTimeoutRef.current = setTimeout(detect, 2000);
    }
  };

  const analyzeFingers = (landmarks) => {
    const fingerJoints = {
      thumb: [0, 1, 2, 3, 4],
      indexFinger: [0, 5, 6, 7, 8],
      middleFinger: [0, 9, 10, 11, 12],
      ringFinger: [0, 13, 14, 15, 16],
      littleFinger: [0, 17, 18, 19, 20],
    };

    let extendedFingers = [];

    for (const finger in fingerJoints) {
      const joints = fingerJoints[finger];
      const isExtended = isFingerExtended(joints, landmarks);
      if (isExtended) {
        extendedFingers.push(finger);
      }
    }

    return extendedFingers;
  };

  // Helper function to calculate angle between three points
  const calculateAngle = (A, B, C) => {
    const AB = Math.sqrt(
      Math.pow(B.x - A.x, 2) + Math.pow(B.y - A.y, 2) + Math.pow(B.z - A.z, 2)
    );
    const BC = Math.sqrt(
      Math.pow(B.x - C.x, 2) + Math.pow(B.y - C.y, 2) + Math.pow(B.z - C.z, 2)
    );
    const AC = Math.sqrt(
      Math.pow(C.x - A.x, 2) + Math.pow(C.y - A.y, 2) + Math.pow(C.z - A.z, 2)
    );
    return Math.acos((BC * BC + AB * AB - AC * AC) / (2 * BC * AB));
  };

  // Updated isFingerExtended function
  const isFingerExtended = (joints, landmarks, fingerName) => {
    const toPoint = (index) => ({
      x: landmarks[index][0],
      y: landmarks[index][1],
      z: landmarks[index][2],
    });

    if (fingerName === "thumb") {
      // Convert joint indices to points
      const points = joints.map(toPoint);

      // Calculate angles between joints
      const angle1 = calculateAngle(points[0], points[1], points[2]);
      const angle2 = calculateAngle(points[1], points[2], points[3]);

      // Define a threshold for determining if the thumb is extended
      const extendedThreshold = Math.PI / 4; // 45 degrees

      // Check if both angles are greater than the threshold
      return angle1 > extendedThreshold && angle2 > extendedThreshold;
    } else {
      // Existing logic for other fingers
      const tip = toPoint(joints[joints.length - 1]);
      const bottom = toPoint(joints[joints.length - 2]);
      return tip.y < bottom.y;
    }
  };

  useEffect(() => {
    if (model && isDetectionStarted) {
      detect();
    }
    return () => {
      if (detectionTimeoutRef.current) {
        clearTimeout(detectionTimeoutRef.current);
      }
    };
  }, [model, isDetectionStarted]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {!isDetectionStarted && !permissionDenied && (
        <button onClick={startVideo}>Start Magic</button>
      )}
      {isDetectionStarted && <button onClick={stopVideo}>Stop Magic</button>}
      {permissionDenied && <p>Need video permissions to proceed.</p>}
      <video
        ref={videoRef}
        style={{ transform: "scaleX(-1)" }}
        hidden={!isDetectionStarted}
      />
      {/* Add UI elements for detected gestures */}
    </div>
  );
};

export default HandGestureDetection;
