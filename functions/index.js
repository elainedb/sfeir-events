'use strict';

process.env.DEBUG = 'actions-on-google:*';
const CustomApiAiApp = require('./shared/customApiAiApp');
const functions = require('firebase-functions');

require('./shared/object.ext');

const Welcome = require('./hooks/welcome');
const ListByType = require('./hooks/listByType');

exports.sfeirevents = functions.https.onRequest((request, response) => {

    const app = new CustomApiAiApp({request, response});
    console.info('### index : Request headers: ' + JSON.stringify(request.headers));
    console.info('### index : Request body: ' + JSON.stringify(request.body));

    let actionMap = new Map();
    [
        new Welcome(request.body),
        new ListByType(request.body)
    ].forEach(i => i.register(actionMap));

    app.handleRequest(actionMap);
});
