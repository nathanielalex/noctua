from flask import Flask, request, jsonify
from PIL import Image
import io
import cv2
import numpy as np
from ultralytics import YOLO
from flask_cors import CORS  # Import CORS
import base64  # Import base64 modul

app = Flask(__name__)

CORS(app)

model = YOLO('new_model.pt')

@app.route('/detect', methods=['POST'])
def detect():
    #get image from the frontend (base64-encoded)
    data = request.get_json()
    image_data = data['image']
    img_bytes = io.BytesIO(base64.b64decode(image_data.split(',')[1]))  # Remove 'data:image/jpeg;base64,' part
    img = Image.open(img_bytes)
    img = np.array(img)

    #infer image
    results = model(img)
    best_detection = None
    max_conf = -1

    for det in results[0].boxes:
        conf = det.conf.item()
        if conf > max_conf:
            bbox = det.xyxy.cpu().numpy().astype(int)[0]
            class_id = int(det.cls.item())
            label = model.names[class_id]

            best_detection = {
                'bbox': bbox.tolist(),
                'label': label,
                'confidence': conf
            }
            max_conf = conf
    detections = [best_detection] if best_detection else []
    return jsonify({'detections': detections})

if __name__ == '__main__':
    app.run(debug=True)
