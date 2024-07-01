const admin = require("firebase-admin");

const serviceAccount = require("./firebase_token.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;