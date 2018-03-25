'use strict';

class SimpleIntent {

    constructor(intentId, req) {
        this.intentId = intentId;
        this.lang = req.lang ? req.lang : "en";
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
        this.log('register Intent');
        actionMap.set(this.intentId, this.safeTrigger.bind(this));
    }

    log(... messages) {
        console.log(`### ${this.constructor.name} :`, ... messages);
    }
}

module.exports = SimpleIntent;