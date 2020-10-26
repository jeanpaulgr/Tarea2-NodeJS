
const express = require("express");
const router = express.Router();

// endPoints
const {
    getTweets,
    getTweetsFollowers,
    tweetsCreate,
    tweetDelete
} = require("../controllers/tweets");

const { 
    tweetById 
} = require("../controllers/tweets");

const { tweetCreateValidator } = require("../validator");

// routes
router.get("/tweets", getTweets);
router.get("/tweets/followers",getTweetsFollowers);
router.post("/tweet/create", tweetCreateValidator, tweetsCreate);
router.delete("/tweet/:tweetID", tweetDelete);

router.param("tweetID", tweetById);

module.exports = router;
