from openai import OpenAI

class GptHelper:

    def __init__(self, gpt_key, max_tokens):
        self.client = OpenAI(api_key=gpt_key)
        self.max_tokens = max_tokens


    def query(self, file, prompt):
        response = self.client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {
                "role": "system",
                "content": "The assistant helps the user in understanding the software architecture diagrams. Be concise in your answers. Always answer in HTML format. Do not generate markdown format."
                },
                {
                "role": "user",
                "content": [
                    {"type": "text", "text": prompt},
                        {
                        "type": "image_url",
                        "image_url": {
                            "url": file,
                        },
                    },
                ],
                }
            ],
            max_tokens=self.max_tokens,
        )
        return response
