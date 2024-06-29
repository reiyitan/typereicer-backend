const express = require("express"); 
const router = express.Router(); 
const fs = require("fs"); 
const path = require("path");

const wordFilePath = path.join(__dirname, "..", "data", "words.txt"); 
const loadWords = () => {
    const data = fs.readFileSync(wordFilePath, "utf-8");
    return data.split("\n"); 
}
const allWords = loadWords(); 

router.get("/", (req, res) => {
    res.send("words endpoint");
}); 

router.get("/get_words", (req, res) => {
    const numWords = req.query.num_words;
    if (numWords > 50 || numWords > allWords.length) {
        return res.status(403).json({error: "Limit request to 50 words"});
    }

    let words = []; 
    let used = new Set(); 
    while (words.length < numWords) {
        let randIndex = Math.floor(Math.random() * allWords.length);
        if (!used.has(randIndex)) {
            used.add(randIndex);
            words.push(allWords[randIndex]);
        }
    }
    return res.json({words});
});

module.exports = router;