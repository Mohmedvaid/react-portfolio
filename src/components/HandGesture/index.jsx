import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import React, { useRef, useEffect, useState, useCallback } from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import Loader from "../Loader";

import getExtendedFingers from "./getExtendedFingers";

const HandGestureDetection = () => {
  const videoRef = useRef();
  const streamRef = useRef();
  const detectionTimeoutRef = useRef(); // Reference to store the timeout ID

  const [model, setModel] = useState(null);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [isDetectionStarted, setIsDetectionStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [detectedFingers, setDetectedFingers] = useState([]);

  // Load model
  useEffect(() => {
    const loadModel = async () => {
      try {
        setIsLoading(true);
        const loadedModel = await handpose.load();
        setModel(loadedModel);
      } catch (error) {
        console.error("Failed to load model: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadModel();
  }, []);

  // Start video
  const startVideo = useCallback(async () => {
    try {
      setIsLoading(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      videoRef.current.srcObject = stream;

      videoRef.current.onloadedmetadata = () => {
        // Ensure the video dimensions are set
        if (
          videoRef.current.videoWidth > 0 &&
          videoRef.current.videoHeight > 0
        ) {
          videoRef.current.play();
          setIsDetectionStarted(true);
          setPermissionDenied(false);
        } else {
          console.error("Video dimensions are zero.");
        }
      };
    } catch (error) {
      console.error("Error accessing the webcam: ", error);
      setPermissionDenied(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Stop video
  const stopVideo = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    clearTimeout(detectionTimeoutRef.current);
    setIsDetectionStarted(false);
    setPermissionDenied(false);
  }, []);

  // Detection logic
  const detect = useCallback(async () => {
    if (videoRef.current && model && isDetectionStarted) {
      const predictions = await model.estimateHands(videoRef.current);
      if (predictions.length > 0) {
        const fingers = getExtendedFingers(predictions[0].landmarks);
        console.log(fingers);
        setDetectedFingers(fingers);
      }
      detectionTimeoutRef.current = setTimeout(detect, 2000);
    }
  }, [model, isDetectionStarted]);

  // Effect for starting detection
  useEffect(() => {
    if (model && isDetectionStarted) {
      detect();
    }
    return () => clearTimeout(detectionTimeoutRef.current);
  }, [model, isDetectionStarted, detect]);

  // Render component
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!isDetectionStarted && !permissionDenied && (
        <Button variant="contained" onClick={startVideo}>
          Start Magic
        </Button>
      )}
      {permissionDenied && <p>Need video permissions to proceed.</p>}
      {isLoading && <Loader />}
      <video
        ref={videoRef}
        style={{ transform: "scaleX(-1)", margin: "20px" }}
        hidden={!isDetectionStarted}
      />
      {isDetectionStarted && (
        <Button variant="contained" onClick={stopVideo}>
          Stop Magic
        </Button>
      )}
      {detectedFingers.length === 0 ? (
        <p>Nothing</p>
      ) : (
        <p>{detectedFingers.join(", ")}</p>
      )}
    </Box>
  );
};

export default HandGestureDetection;
