import speech_recognition as sr

# Initialize the recognizer
recognizer = sr.Recognizer()

def speech_to_text():
    with sr.Microphone() as source:
        print("Please speak...")
        recognizer.adjust_for_ambient_noise(source)  # Adjust for ambient noise
        audio = recognizer.listen(source)  # Listen for audio input

        try:
            text = recognizer.recognize_google(audio)  # Use Google Speech Recognition
            return text
        except sr.UnknownValueError:
            print("Sorry, I could not understand what you said.")
            return ""
        except sr.RequestError as e:
            print("Could not request results from Google Speech Recognition service; {0}".format(e))
            return ""

# Call the function to convert speech to text
converted_text = speech_to_text()
print("You said:", converted_text)