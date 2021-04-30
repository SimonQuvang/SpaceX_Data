const express = require("express");
const router = express.Router();
let Tag = require("../models/tags.model");

export const addtag = (object, req) =>{
    const tag = new Tag({
        tag: req.body.tag,
        weight: req.body.weight,
    });

    object.update({$push: {tags: tag}}).then((data) =>{
        console.log("tag updated for " + type(object));

    ).catch((error) => {
        console.log(error);
    ))}
}