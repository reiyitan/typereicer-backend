const express = require("express"); 
const router = express.Router();
const admin =  require("../fbAdmin");

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