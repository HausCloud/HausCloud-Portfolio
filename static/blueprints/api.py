from flask import Blueprint, request, jsonify, abort

api = Blueprint('api', __name__ , url_prefix='/api')

@api.route('/google_translate', methods=['GET'])
def googleTranslate():
    from google.cloud import translate_v2 as translate
    from google.oauth2 import service_account

    result = request.get_json()

    # Check for valid JSON with required attributes
    if result is None:
        return abort(400, 'Request must be a valid JSON object and contain an "application/json" content-type')
    elif 'text' not in result:
        return abort(400, 'JSON must contain text property/attribute')
    
    # Connect to Google API translation client
    translate_client = translate.Client(credentials=service_account.Credentials.from_service_account_file('./static/blueprints/.file.json'))

    # Translate text to japanese
    result = translate_client.translate(result['text'], target_language='ja')

    return jsonify({'japanese_translation': result['translatedText']})
