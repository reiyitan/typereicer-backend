require("dotenv").config();

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