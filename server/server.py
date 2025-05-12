from flask import Flask, request, jsonify
from PIL import Image
import io
import cv2
import numpy as np
from ultralytics import YOLO
from flask_cors import CORS  # Import CORS
import base64  # Import base64 modul

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Load YOLO model
model = YOLO('my_model.pt')

@app.route('/detect', methods=['POST'])
def detect():
    # Get image from the frontend (base64-encoded)
    data = request.get_json()
    image_data = data['image']
    img_bytes = io.BytesIO(base64.b64decode(image_data.split(',')[1]))  # Remove 'data:image/jpeg;base64,' part
    img = Image.open(img_bytes)
    img = np.array(img)

    # Run YOLO model on the image
    results = model(img)
    detections = []

    # Extract detection results
    for det in results[0].boxes:
        bbox = det.xyxy.cpu().numpy().astype(int)[0]  # Get coordinates of bounding box
        class_id = int(det.cls.item())  # Get class ID
        conf = det.conf.item()  # Get confidence
        label = model.names[class_id]  # Get class name

        detections.append({
            'bbox': bbox.tolist(),
            'label': label,
            'confidence': conf
        })

    return jsonify({'detections': detections})

if __name__ == '__main__':
    app.run(debug=True)
