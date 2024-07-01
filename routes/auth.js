const express = require("express"); 
const router = express.Router();
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth");
const auth = getAuth();
const admin =  require("../fbAdmin");

router.post("/register", (req, res) => {
    const username = req.body.username;
    const email = req.body.email; 
    const password = req.body.password;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user; 
        return res.status(201).json({user});
    }) 
    .catch((error) => {
        console.log(error);
        return res.status(500).json({error: error.code});
    });
});

router.post("/login", (req, res) => {
    const email = req.body.email; 
    const password = req.body.password;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user; 
        return res.status(200).json({user});
    })
    .catch((error) => {
        return res.status(500).json({error: error.code});
    });
}); 

router.post("/verify", (req, res) => {
    const token = req.body.token;
    admin.auth().verifyIdToken(token, true)
    .then(decodedToken => {
        return res.status(200).json({verified: true, uid: decodedToken.uid});
    })
    .catch(error => {
        switch (error.code) {
            case "auth/argument-error": 
                res.status(200).json({verified: false});
                break;
        }
    });
}); 

module.exports = router;