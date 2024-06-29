const express = require("express"); 
const router = express.Router();

router.get("/", (req, res) => {
    res.send("auth endpoint");
});

module.exports = router;