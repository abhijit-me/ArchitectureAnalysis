import markdown

class GptParser:

    def parse_response(self, response):
        content = response.choices[0].message.content
        content = markdown.markdown(content)
        model = response.model
        prompt_tokens = response.usage.prompt_tokens
        completion_tokens = response.usage.completion_tokens
        return {'content': content, 'model': model, 'prompt_tokens' : prompt_tokens, 'completion_tokens': completion_tokens }       
