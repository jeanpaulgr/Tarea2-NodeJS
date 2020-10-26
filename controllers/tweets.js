const Tweet = require("../models/tweets");

exports.tweetById = (req, res, next, id) => {
    Tweet.findById(id).exec((err, tweet) => {
        if (err || !tweet) {
            return res.status(400).json({
                error: "Tweet not found"
            });
        }
        req.tweet = tweet;
        next();
    });
};

// middlewares rest
exports.getTweets = (req, res) => {
   
};

exports.getTweetsFollowers = (req, res) => {
   
};
exports.tweetsCreate = (req, res, next, id) => {
   
};

exports.tweetDelete = (req, res, next, id) => {
   
};