# 🦉 Noctua

**Noctua** is a full-stack project that combines a **React + TypeScript + Vite** frontend with a **Flask** backend to help drivers stay awake during when driving.

🌐 **Live Demo (Frontend Only)**: [noctua-khaki.vercel.app](https://noctua-khaki.vercel.app/)  
⚠️ **Note**: The backend is not deployed. To fully experience the app, you must run the backend locally.

---

## 📁 Project Structure

```
noctua/
├── client/     # Frontend (React + TypeScript + Vite)
├── server/     # Backend (Flask API and model)
└── README.md   # Project documentation
```

---

## 🛠️ Installation & Setup

### ✅ Prerequisites

Make sure the following are installed on your system:

- **Python 3.8+**
- **Node.js v16+**
- **npm** (bundled with Node.js)
- **Git**

---

### 🚀 Getting Started

#### 1. Clone the repository

```bash
git clone https://github.com/nathanielalex/noctua.git
cd noctua
```

#### 2. Set up the Backend

```bash
cd server

# Create a virtual environment
python -m venv venv

# Activate it
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install Python dependencies
pip install flask flask-cors pillow numpy opencv-python torch torchvision ultralytics

# Run the Flask server
python server.py
```

#### 3. Set up the Frontend

```bash
cd ../client

# Install frontend dependencies
npm install

# Start the development server
npm run dev
```
