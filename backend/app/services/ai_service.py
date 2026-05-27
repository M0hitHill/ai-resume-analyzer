from google import genai
from dotenv import load_dotenv
import os


load_dotenv()

API_KEY = os.getenv("GOOGLE_API_KEY")
print("API_KEY: ",API_KEY)

client = genai.Client(api_key=API_KEY)


def analyze_resume_with_ai(prompt: str):
    response = client.models.generate_content(
        model="gemini-3.5-flash",
        contents= prompt)
    print(response.text)
    return response.text

