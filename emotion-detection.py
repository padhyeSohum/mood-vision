import cv2
from deepface import DeepFace
import time
import main
generated_result = []
# Load the pre-trained Haar Cascade for face detection
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Create a VideoCapture object to access the webcam
cap = cv2.VideoCapture(0)  # Use 0 for the default webcam, or change it to the appropriate index for your webcam

# Check if the camera was opened successfully
if not cap.isOpened():
    print("Error: Could not open camera.")
    exit()

# Set a default window size
window_width = 1000
window_height = 600

# Initialize variables for emotion display
emotion_timer = time.time()
display_emotion = None

# Read frames from the webcam and detect faces
while True:  
    # Capture frame-by-frame
    ret, frame = cap.read()

    # Check if the frame was read successfully
    if not ret:
        print("Error: Could not read frame.")
        break

    # Convert the frame to grayscale
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect faces in the grayscale frame
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=7, minSize=(30, 30))

    # Draw rectangles around the detected faces
    for (x, y, w, h) in faces:
        # Draw rectangle around the face
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)

        # Crop the face region
        face_roi = frame[y:y+h, x:x+w]

        # Analyze emotions using DeepFace
        if time.time() - emotion_timer >= 1.3:
            result = DeepFace.analyze(face_roi, actions=['emotion'], enforce_detection=False)
            if result and isinstance(result, list) and result[0].get('dominant_emotion'):
                display_emotion = result[0]['dominant_emotion']
                # Call main.generate and get the result to display
                generated_result = main.generate()
            emotion_timer = time.time()

        # Display the dominant emotion on the frame
        if display_emotion:
            cv2.putText(frame, display_emotion, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0, 255, 0), 2)
        
    # Display the result from main.generate()
    if generated_result:
        # Calculate the size of the text
        text_size = cv2.getTextSize(generated_result, cv2.FONT_HERSHEY_SIMPLEX, 0.7, 2)[0]
        
        # Ensure text fits within the window height
        if text_size[1] > window_height:
            # Reduce font size if the text is too large
            font_scale = 0.5
        else:
            font_scale = 0.7
        
        # Recalculate the text size with the new font size
        text_size = cv2.getTextSize(generated_result, cv2.FONT_HERSHEY_SIMPLEX, font_scale, 2)[0]
        
        # Calculate the coordinates for bottom left corner
        text_x = 10
        text_y = window_height - text_size[1] - 10
        
        # Draw the text on the frame
        cv2.putText(frame, generated_result, (text_x, text_y), cv2.FONT_HERSHEY_SIMPLEX, font_scale, (0, 0, 255), 2)

    # Resize the frame to the desired window size
    frame = cv2.resize(frame, (window_width, window_height))

    # Display the resized frame with detected faces, emotions, and generated result
    cv2.imshow('Face Tracking with Emotion Detection', frame)

    # Exit the loop if 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the VideoCapture object and close all windows
cap.release()
cv2.destroyAllWindows()
