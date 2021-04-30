import express from 'express';
import Source from "../models/sources.model";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("WE are on the right track");
});

router.post("/", (req, res) => {
    const source = new Source({
        date: req.body.date,
        author: req.body.author,
        description: req.body.description,
        site_name: req.body.site_name,
        url: req.body.url,
    });
    if (req.body.tags) source.set({ tags: req.body.tags });

    source
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