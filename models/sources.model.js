
import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const tagsSchema = Schema({
    tag: String,
    weight: Number,
})

const SourcesSchema = Schema({
    tags: [tagsSchema],
    url: String,
    site_name: String,
    author: String,
    description: String,
    date: String,
});

module.exports = mongoose.model("Sources", SourcesSchema);