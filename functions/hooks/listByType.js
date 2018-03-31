'use strict';

const SimpleIntent = require('./shared/simpleIntent');
const utils = require('./shared/_utils');

const callSheet = require('../google-sheet-api');

const INTENT_ID = 'intent.events.listbytype';

// TODO localize
const WELCOME_SENTENCES = [
    "Bonjooooour!"
];

function listValues(auth) {
    console.log('# listByType : Hey, my endpoint function is called');
    var sheets = google.sheets('v4');
    sheets.spreadsheets.values.get({
        auth: auth,
        spreadsheetId: '1X6NJfAQEIcEo5Z4J_uxv3nq2scgb8Cti_evVjIxJQqk',
        range: 'test!A1:C3',
    }, function (err, response) {
        if (err) {
            console.log('# listByType : The API returned an error: ' + err);
            return;
        }
        var rows = response.values;
        if (rows.length == 0) {
            console.log('# listByType : No data found.');
        } else {
            console.log('# listByType : Values found');
            for (var i = 0; i < rows.length; i++) {
                var row = rows[i];
                console.log(row[0], row[1], row[2]);
            }
        }
    });
}

class ListByType extends SimpleIntent {

    constructor(req) {
        super(INTENT_ID, req);
        this.log('# listByType : create ListByType Intent');
    }

    trigger(app) {
        this.log('# listByType : ListByType triggered');
        callSheet(listValues);
        this.log('# listByType : end');
        app.ask('heyyy it\'s done :D');
    }
}

module.exports = ListByType;