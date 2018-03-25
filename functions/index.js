'use strict';

process.env.DEBUG = 'actions-on-google:error';
const App = require('actions-on-google').DialogflowApp;
const functions = require('firebase-functions');

require('./hooks/shared/object.ext');

const Welcome = require('./hooks/welcome');
const ListByType = require('./hooks/listByType');

exports.sfeirevents = functions.https.onRequest((request, response) => {

    const app = new App({request, response});
    console.log('### index : Request headers: ' + JSON.stringify(request.headers));
    console.log('### index : Request body: ' + JSON.stringify(request.body));

    let actionMap = new Map();
    [
        new Welcome(request.body),
        new ListByType(request.body)
    ].forEach(i => i.register(actionMap));

    app.handleRequest(actionMap);
});
