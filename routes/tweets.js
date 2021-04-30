import express from 'express'
import Tweets from "../models/tweets.model";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("WE are on the right track");
});

router.post("/", (req, res) => {
    const tweet = new Tweet({
        date: req.body.date,
        author: req.body.author,
        tweet_text: req.body.tweet_text,
        tweet_id: req.body.tweet_text_id,
        url: req.body.url,
    });
    if (req.body.question) tweet.set({ question: req.body.question_id });
    if (req.body.relatedTweets) tweet.set({ relatedTweets: req.body.relatedTweets });
    if (req.body.tags) tweet.set({ tags: req.body.tags });

    tweet
        .save()
        .then((data) => {
            console.log("sucess");
            res.json(data._id);
        })
        .catch((error) => {
            console.log(error);
            res.json({ message: error });
        });
});

module.exports = router;
