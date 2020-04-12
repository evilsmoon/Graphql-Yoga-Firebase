const admin =require('firebase-admin');
const functions = require('firebase-functions');
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://tops-restaurants.firebaseio.com"
});

const app = require('./src/graphql');
exports.graphql = functions.https.onRequest(app);
