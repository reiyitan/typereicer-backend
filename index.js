require("dotenv").config();

//firebase
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

//express init
const express = require("express");
const expApp = express(); 
const port = 4000; 

//middleware
const cors = require("cors");
const bodyParser = require("body-parser"); 
expApp.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST",
    allowedHeaqers: "Content-Type"
}));
expApp.use(bodyParser.json());

//routes
const authRoutes = require("./routes/auth"); 
const wordRoutes = require("./routes/words");
expApp.use("/auth", authRoutes); 
expApp.use("/words", wordRoutes);

expApp.get("/", (req, res) => {
    res.send("typereicer");
}); 
  
expApp.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});