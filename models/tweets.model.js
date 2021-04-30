import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const tagsSchema = Schema({
    tag: String,
    weight: Number,
})

const TweetsSchema = Schema({
    tags: [tagsSchema],
    date: String,
    author: String,
    tweet_text: String,
    tweet_id: String,
    relatedTweets: [{ type: Schema.Types.ObjectId, ref: "Tweets", default:[]}],
    url: String,
    question_id: {type:String,default:""},
});

module.exports = mongoose.model("Tweets", TweetsSchema);
