'use strict';

const AbstractIntent = require('./abstractIntent')

class SimpleIntent extends AbstractIntent {

    /**
     * @param intentId {string}
     * @param req {Response}
     */
    constructor(intentId, req) {
        super();
        this.intentId = intentId;

        /** @type {string} */
        this.lang = req.lang ? req.lang : "en";

        /** @type {Response} */
        this.req = req;
    }

    /**
     * @param app {ApiAiApp}
     */
    trigger(app) {
        throw new Error('Not implemented');
    }

    /**
     * @param app {ApiAiApp}
     */
    safeTrigger(app) {
        try {
            this.trigger(app);
        }
        catch (e) {
            console.error(e);
        }
    }

    register(actionMap) {
        actionMap.set(this.intentId, this.safeTrigger.bind(this));
    }
}

module.exports = SimpleIntent;