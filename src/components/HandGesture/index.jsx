import React, { useRef, useEffect, useState, useCallback } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Loader from "../Loader";
import getExtendedFingers from "./getExtendedFingers";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    transform: "scaleX(-1)",
    margin: "20px",
  },
  noticeWrapper: {
    textAlign: "center",
    marginTop: 20,
  },
};

const HandGestureDetection = () => {
  const videoRef = useRef();
  const streamRef = useRef();
  const detectionTimeoutRef = useRef();

  const [model, setModel] = useState(null);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [isDetectionStarted, setIsDetectionStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [detectedFingers, setDetectedFingers] = useState([]);

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

  const startVideo = useCallback(async () => {
    try {
      setIsLoading(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      videoRef.current.srcObject = stream;
      videoRef.current.onloadedmetadata = () => {
        videoRef.current.play();
        setIsDetectionStarted(true);
        setPermissionDenied(false);
      };
    } catch (error) {
      console.error("Error accessing the webcam: ", error);
      setPermissionDenied(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const stopVideo = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    clearTimeout(detectionTimeoutRef.current);
    setIsDetectionStarted(false);
    setDetectedFingers([]);
  }, []);

  const detect = useCallback(async () => {
    if (videoRef.current && model && isDetectionStarted) {
      const predictions = await model.estimateHands(videoRef.current);
      if (predictions.length > 0) {
        const fingers = getExtendedFingers(predictions[0].landmarks);
        setDetectedFingers(fingers);
      }
      detectionTimeoutRef.current = setTimeout(detect, 2000);
    }
  }, [model, isDetectionStarted]);

  useEffect(() => {
    if (model && isDetectionStarted) {
      detect();
    }
    return () => clearTimeout(detectionTimeoutRef.current);
  }, [model, isDetectionStarted, detect]);

  // Separate component for permission notice
  const PermissionNotice = () => {
    if (!permissionDenied) return null;
    return (
      <Typography color="error">Need video permissions to proceed.</Typography>
    );
  };

  // Separate component for detected fingers
  const DetectedFingers = () => {
    if (!isDetectionStarted) return null;
    return detectedFingers.length === 0 ? (
      <Typography gutterBottom>No fingers detected</Typography>
    ) : (
      <Typography>{detectedFingers.join(", ")}</Typography>
    );
  };

  return (
    <Box sx={styles.root}>
      {!isDetectionStarted && !permissionDenied && (
        <Button variant="contained" onClick={startVideo}>
          Start Magic
        </Button>
      )}
      <PermissionNotice />
      {isLoading && <Loader />}
      <video ref={videoRef} style={styles.video} hidden={!isDetectionStarted} />
      <DetectedFingers />
      {isDetectionStarted && (
        <Box sx={styles.noticeWrapper}>
          <Button variant="contained" onClick={stopVideo} gutterBottom>
            Stop Magic
          </Button>
          <Typography variant="subtitle1" gutterBottom>
            Detection runs every 2 seconds for CPU efficiency. Please be
            patient.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default HandGestureDetection;
