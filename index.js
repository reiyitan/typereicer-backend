const express = require("express");
const app = express(); 
const port = 3000; 

require("dotenv").config();

const { initializeApp } = require("firebase/app");

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const fbApp = initializeApp(firebaseConfig);

app.get("/", (req, res) => {
    res.send("tetestest");
});
  
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});