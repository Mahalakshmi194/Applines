import React, { useEffect, useRef, useState } from "react";
import { SelfieSegmentation } from "@mediapipe/selfie_segmentation";

function Home() {
  const inputVideoRef = useRef();
  const canvasRef = useRef();
  const contextRef = useRef();

  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const mediaRecorder = useRef(null);

  useEffect(() => {
    contextRef.current = canvasRef.current.getContext("2d");
    const constraints = {
      video: { width: { min: 1280 }, height: { min: 720 } },
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      inputVideoRef.current.srcObject = stream;
      sendToMediaPipe();
    });

    const selfieSegmentation = new SelfieSegmentation({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/${file}`,
    });

    selfieSegmentation.setOptions({
      modelSelection: 1,
      selfieMode: true,
    });

    selfieSegmentation.onResults(onResults);

    mediaRecorder.current = new MediaRecorder(stream);
    mediaRecorder.current.ondataavailable = handleDataAvailable;
  }, []);

  const onResults = (results) => {
    contextRef.current.save();
    contextRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    contextRef.current.drawImage(
      results.segmentationMask,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    contextRef.current.globalCompositeOperation = "source-out";
    contextRef.current.fillStyle = "#00FF00";
    contextRef.current.fillRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    contextRef.current.globalCompositeOperation = "destination-atop";
    contextRef.current.drawImage(
      results.image,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    contextRef.current.restore();
  };

  const handleStartRecording = () => {
    setRecording(true);
    setRecordedChunks([]);
    mediaRecorder.current.start();
  };

  const handleStopRecording = () => {
    mediaRecorder.current.stop();
    setRecording(false);
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      setRecordedChunks((prevChunks) => [...prevChunks, event.data]);
    }
  };

  const handlePreviewVideo = () => {
    const recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
    const videoURL = URL.createObjectURL(recordedBlob);

    const previewVideo = document.createElement("video");
    previewVideo.src = videoURL;
    previewVideo.controls = true;

    const previewContainer = document.getElementById("previewContainer");
    previewContainer.innerHTML = "";
    previewContainer.appendChild(previewVideo);
  };

  return (
    <div className="App">
      <video autoPlay ref={inputVideoRef} style={{ display: "none" }} />
      <canvas ref={canvasRef} width={1280} height={720} />
      <div>
        <button onClick={handleStartRecording} disabled={recording}>
          Start Recording
        </button>
        <button onClick={handleStopRecording} disabled={!recording}>
          Stop Recording
        </button>
        <button onClick={handlePreviewVideo} disabled={recordedChunks.length === 0}>
          Preview Recorded Video
        </button>
      </div>
      <div id="previewContainer"></div>
    </div>
  );
}

export default Home;
