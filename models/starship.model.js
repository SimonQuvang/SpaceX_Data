import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
	date: String,
	comment: String,
	source: { url: String, name: String },
	tags: [String]
});

const StarshipSchema = new mongoose.Schema({
	tags: [String],
	name: String,
	eventhistory: [EventSchema],
	status: { date: String, comment: String, status: String }
});

const Starship = mongoose.model("starship", StarshipSchema);
const Event = mongoose.model("event", EventSchema);

export { Starship, Event };
