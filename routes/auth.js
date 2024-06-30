const express = require("express"); 
const router = express.Router();
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const auth = getAuth();

router.post("/register", (req, res) => {
    const email = req.body.email; 
    const password = req.body.password;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user; 
        return res.status(201).json({user});
    }) 
    .catch((error) => {
        return res.status(500).json({error: error.code});
    })
});

module.exports = router;