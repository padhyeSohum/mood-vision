import base64
import vertexai
from vertexai.generative_models import GenerativeModel, Part, FinishReason
import vertexai.preview.generative_models as generative_models
from PIL import Image
import io
previous_responses = []
image_path = 'image.jpeg'
image = Image.open(image_path)
buffered = io.BytesIO()
image.save(buffered, format="jpeg")
image_bytes = buffered.getvalue()

def generate():
  vertexai.init(project="advance-conduit-418820", location="us-central1")
  model = GenerativeModel("gemini-1.0-pro-vision-001")
  responses = model.generate_content(
      [image1, text1],
      generation_config=generation_config,
      safety_settings=safety_settings,
      stream=True,
  )

  for response in responses:
    print(responses.text)
    return (response.text)



image1 = Part.from_data(
    mime_type="image/jpeg",
    data=image_bytes

)

text1 = f"""This is an image taken from the eyes of a kid suffering with autism provide suggestions for how that kid can interact with the person in the picture include things such as facial expression and mood keep your response short thoughtful and encouraging. talk directly to the kid . Try to give him answers that are short and simple also take into context the previos answers you provided listed here {previous_responses}"""
text2 = f"Be an imaginary friend to someone with autism. Guide them mainly around understanding the emotions of the person in the picture."

generation_config = {
    "max_output_tokens": 2048,
    "temperature": 0.2,
    "top_p": 1,
    "top_k": 32,
}

safety_settings = {
    generative_models.HarmCategory.HARM_CATEGORY_HATE_SPEECH: generative_models.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    generative_models.HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT: generative_models.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    generative_models.HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT: generative_models.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    generative_models.HarmCategory.HARM_CATEGORY_HARASSMENT: generative_models.HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
}
previous_responses = []
text = generate()
previous_responses.append(text)
