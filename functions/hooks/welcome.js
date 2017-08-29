'use strict';

const SimpleIntent = require('./shared/simpleIntent');
const utils = require('./shared/_utils');

const INTENT_ID = 'input.welcome';

// TODO localize
const WELCOME_SENTENCES = [
    "Bienvenue sur SFEIR events"
];

class Welcome extends SimpleIntent {

    constructor(req) {
        super(INTENT_ID, req);
    }

    trigger(app) {

        let welcomeResponse = utils.randomFromArray(WELCOME_SENTENCES);

        app.ask(welcomeResponse);
    }
}

module.exports = Welcome;