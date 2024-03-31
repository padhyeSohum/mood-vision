from flask import Flask, render_template, redirect, url_for
import subprocess
import sys

app = Flask(__name__)

# Determine the path to the Python interpreter
python_path = sys.executable

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/run_emotion_detection')
def run_emotion_detection():
    try:
        # Execute face-detection.py using subprocess
        subprocess.Popen([python_path, "emotion-detection.py"])
        return redirect(url_for('index'))
    except FileNotFoundError as e:
        # Print the error for debugging
        print(f"Error executing emotion-detection.py: {e}")
        return "Error: emotion-detection.py not found or unable to execute."

if __name__ == '__main__':
    app.run(debug=True)
