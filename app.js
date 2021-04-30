import express from 'express'
import mongoose from "mongoose";
import dotenv from "dotenv";
import * as starshipRouter from "./routes/starship.js";


const app = express();
dotenv.config()

//Middleware
app.use(express.json());

// Connect to database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to database"));


// Routes
app.use("/starship", starshipRouter.router);

app.listen(4000);
