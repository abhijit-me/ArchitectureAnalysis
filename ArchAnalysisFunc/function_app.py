import azure.functions as func
import logging
from gpt_helper import GptHelper
from gpt_parser import GptParser
import json

gptHelper = GptHelper('', 500) # Add Open AI Key Here
gptParser = GptParser()

app = func.FunctionApp(http_auth_level=func.AuthLevel.FUNCTION)

@app.route(route="RunAnalysisQuery")
def RunAnalysisQuery(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    try:
        req_body = req.get_json()
    except ValueError:
        pass
    else:
        file = req_body.get('file')
        query = req_body.get('query')

    logging.info(file)
    logging.info(query)
    response = gptHelper.query(file, query)
    logging.info(response)
    result = gptParser.parse_response(response)
    logging.info(result)

    return func.HttpResponse(json.dumps(result), mimetype="application/json", status_code=200)
    