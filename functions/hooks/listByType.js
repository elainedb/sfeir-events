'use strict';

const SimpleIntent = require('../shared/simpleIntent');
const utils = require('../shared/_utils');

const INTENT_ID = 'intent.events.listbytype';

// TODO localize
const WELCOME_SENTENCES = [
    "Bonjooooour!"
];

class ListByType extends SimpleIntent {

    constructor(req) {
        super(INTENT_ID, req);
    }

    /** @inheritDoc */
    trigger(app) {

        let welcomeResponse = utils.randomFromArray(WELCOME_SENTENCES);

        app.tell(welcomeResponse);
    }
}

module.exports = ListByType;