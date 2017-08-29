const ApiAiApp = require('actions-on-google').ApiAiApp;

/**
 * Extends ApiAiApp to allow overriding of buildResponse_ to have more control over how response is built and add some
 * data (ex: for slack)
 */
class CustomApiAiApp extends ApiAiApp {

    /** @inheritDoc */
    buildResponse_(textToSpeech, expectUserResponse, noInputs) {
        const response = super.buildResponse_(textToSpeech, expectUserResponse, noInputs);

        // TODO add only when applicable
        // originalRequest.source === 'slack_testbot' ???
        // result.contexts[name=generic].parameters.slack_user_id is present ??
        response.data.slack = { 'text': 'Hello from slack!' };

        return response;
    }
}

module.exports = CustomApiAiApp;