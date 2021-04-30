import express from "express";
import { Starship, Event } from "../models/Starship.model.js";

const router = express.Router();

router.get("/rocket/:id", (req, res) => {
	id = req.params.id;
	Starship.findById(id).then((data) => {
		res.send(data);
	});
});

router.post("/newStarship", async (req, res) => {
	// check if the starship is already in database
	Starship.findOne({}, (err, starship) => {
		if (err) {
			//handle error
			return;
		}
		if (starship) {
			// there already is a starship with that name
			res.json(starship.id);
			return;
		}
		// there wasnt any starships named that, so create a new and save to database
		const newStarship = new Starship({
			name: req.body.name
		});
		//make new starship
		newStarship
			.save()
			.then((data) => {
				res.json(data.id);
			})
			.catch((err) => {
				res.json({ message: err.message });
			});
	});
});

router.post(":id/addEvent", (req, res) => {
	const event = new Starship.Event({
		name: req.body.name,
		comment: req.body.comment,
		source: req.body.source
	});

	res.send("WE are on the right track");
});
router.post("/addUpdate", (req, res) => {
	res.send("WE are on the right track");
});

router.post("/newRocket", (req, res) => {
	const starship = new Starship({
		name: req.body.name
	});

	starship
		.save()
		.then((data) => {
			res.json(data._id);
		})
		.catch((error) => {
			res.json({ message: error });
		});
});

export { router };
