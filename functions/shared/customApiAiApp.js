const ApiAiApp = require('actions-on-google').ApiAiApp;

/**
 * Extends ApiAiApp to allow overriding of buildResponse_ to have more control over how response is built and add some
 * data (ex: for slack)
 */
class CustomApiAiApp extends ApiAiApp {

    /** @inheritDoc */
    buildResponse_(textToSpeech, expectUserResponse, noInputs) {
        const response = super.buildResponse_(textToSpeech, expectUserResponse, noInputs);

        if (response) {
            if (this.isFromSlack()) {
                // https://api.slack.com/docs/message-formatting
                // https://api.slack.com/docs/message-attachments
                // https://api.slack.com/interactive-messages
                const slackResponse = {
                    text: response.speech
                };

                if (response.data && response.data.google && response.data.google.rich_response) {
                    const richResponse = response.data.google.rich_response;

                    if (richResponse.items && richResponse.items[0] && richResponse.items[0].simple_response) {
                        slackResponse.text = richResponse.items[0].simple_response.text_to_speech;
                    }

                    if (richResponse.suggestions && richResponse.suggestions.length) {
                        // it may be possible to do things here but slack need more info than provided by richResponses
                    }
                }

                response.data.slack = slackResponse;
            }
        }

        return response;
    }

    /** @return {boolean} return true if current intent comes from a slack bot  */
    isFromSlack() {
        return !!this.getContextArgument('generic', 'slack_user_id');
    }
}

module.exports = CustomApiAiApp;