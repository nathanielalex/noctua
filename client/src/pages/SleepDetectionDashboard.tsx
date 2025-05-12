import Layout from "@/components/Layout";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

interface Detection {
  bbox: [number, number, number, number]; // [x, y, width, height]
  label: string;
  confidence: number;
}

interface ApiResponse {
  detections: Detection[];
}

const SleepDetectionDashboard: React.FC = () => {
  const [detections, setDetections] = useState<Detection[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchSleepDetection = async (base64Image: string) => {
    const requestBody = {
      image: base64Image,
    };

    try {
      const response = await axios.post<ApiResponse>(
        "http://127.0.0.1:5000/detect",
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setDetections(response.data.detections);
    } catch (error) {
      console.error("Error during the API call:", error);
    }
  };
  const captureFrame = (): string => {
    if (!videoRef.current) return "";

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (context) {
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL("image/jpeg"); // Convert to base64
    }

    return "";
  };

  // Start/stop monitoring
  const toggleMonitoring = async (): Promise<void> => {
    if (!isActive) {
      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
          });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
          setIsActive(true);

          intervalRef.current = setInterval(() => {
            const base64Image = captureFrame(); // Capture the current frame as base64
            if (base64Image) {
              fetchSleepDetection(base64Image); // Send the captured frame to the backend
            }
          }, 1000); // Adjust interval time
        }
      } catch (err) {
        setError("Cannot access camera");
        console.error("Camera error:", err);
      }
    } else {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
      setIsActive(false);
      setDetections([]);
    }
  };

  // Draw bounding boxes on canvas when detections change
  useEffect(() => {
    if (canvasRef.current && videoRef.current && detections.length > 0) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const video = videoRef.current;

      if (!context) return;

      // Match canvas size to video
      canvas.width = video.clientWidth;
      canvas.height = video.clientHeight;

      // Clear previous drawings
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw detections
      detections.forEach((detection: Detection) => {
        const [x, y, width, height] = detection.bbox;
        const scaledX = (x / 640) * canvas.width;
        const scaledY = (y / 480) * canvas.height;
        const scaledWidth = (width / 640) * canvas.width;
        const scaledHeight = (height / 480) * canvas.height;

        // Draw bounding box
        context.strokeStyle =
          detection.label === "sleepy" ? "#ff0000" : "#00ff00";
        context.lineWidth = 3;
        context.strokeRect(scaledX, scaledY, scaledWidth, scaledHeight);

        // Draw label
        context.fillStyle =
          detection.label === "sleepy" ? "#ff0000" : "#00ff00";
        context.font = "18px Arial";
        context.fillText(
          `${detection.label} (${Math.round(detection.confidence * 100)}%)`,
          scaledX,
          scaledY - 10
        );
      });
    }
  }, [detections]);

  // Play alert sound if sleepy detection is made
  useEffect(() => {
    const hasSleepyDetection = detections.some(
      (d: Detection) => d.label === "sleepy" && d.confidence > 0.7
    );

    if (hasSleepyDetection) {
      // Play alert sound
      const audio = new Audio("/alert-sound.mp3");
      audio.play().catch((e) => console.error("Audio error:", e));
    }
  }, [detections]);

  return (
    <Layout>

      <div className="flex flex-col items-center w-full mx-auto p-4 bg-[#F0F0F0] min-h-screen text-[#333333] py-10">
        <header className="w-full text-center mb-8">
          <h1 className="text-3xl font-bold" style={{color: '#A8D0E6'}}>Driver Sleep Detection System</h1>
          <p className="text-[#333333] mt-2">Real-time drowsiness monitoring for safer driving</p>
        </header>
        
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 mb-8" style={{backgroundColor: '#FFFFFF'}}>
          <div className="relative w-full h-[70vh] aspect-video rounded overflow-hidden" style={{backgroundColor: '#A8D0E6'}}>
            {/* Video feed */}
            <video 
              ref={videoRef}
              autoPlay 
              playsInline
              muted
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Canvas overlay for bounding boxes */}
            <canvas 
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
            />
            
            {/* Status indicators */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              </div>
            )}
            
            {!isActive && !isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
                <div className="text-white text-center">
                  <p className="text-xl font-bold mb-2">Camera Off</p>
                  <p>Click Start Monitoring to begin</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Controls */}
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={toggleMonitoring}
              className={`px-6 py-2 rounded-lg font-medium text-white ${
                isActive 
                  ? 'bg-[#D32F2F] hover:bg-red-700' 
                  : 'bg-[#00B8D9] hover:bg-teal-700'
              }`}
            >
              {isActive ? 'Stop Monitoring' : 'Start Monitoring'}
            </button>
            
            {/* Status message */}
            <div className="text-right">
              {detections.some(d => d.label === 'sleepy' && d.confidence > 0.7) ? (
                <div className="text-[#D32F2F] font-bold animate-pulse">
                  ALERT: Drowsiness Detected!
                </div>
              ) : isActive ? (
                <div className="text-[#FFB400]">Driver Alert</div>
              ) : null}
            </div>
          </div>
        </div>
        
        {/* Detection details panel */}
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6" style={{backgroundColor: '#FFFFFF'}}>
          <h2 className="text-xl font-bold mb-4" style={{color: '#A8D0E6'}}>Detection Details</h2>
          
          {error && (
            <div className="p-3 bg-[#D32F2F] text-white rounded mb-4">
              Error: {error}
            </div>
          )}
          
          {detections.length > 0 ? (
            <div className="space-y-4">
              {detections.map((detection: Detection, index: number) => (
                <div key={index} className="p-4 border rounded-lg" style={{backgroundColor: '#F0F0F0'}}>
                  <div className="flex justify-between">
                    <span className="font-medium">Detection {index + 1}:</span>
                    <span className={`font-bold ${
                      detection.label === 'sleepy' 
                        ? 'text-[#D32F2F]' 
                        : 'text-[#00B8D9]'
                    }`}>
                      {detection.label.toUpperCase()}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-[#333333]">
                    <div className="text-[#FF6F00]">Confidence: {Math.round(detection.confidence * 100)}%</div>
                    <div>Position: x={detection.bbox[0]}, y={detection.bbox[1]}</div>
                    <div>Size: width={detection.bbox[2]}, height={detection.bbox[3]}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : isActive ? (
            <p className="text-[#333333]">No detections at the moment...</p>
          ) : (
            <p className="text-[#333333]">Start monitoring to see detection data</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SleepDetectionDashboard;
