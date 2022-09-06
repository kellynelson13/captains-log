///DEPENDENCIES///
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const port = 3000;
const Log = require("./models/logs.js")

// Database Connection
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));



// Middleware
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));


/// ROUTES ////

// INDEX //

// NEW //
app.get("/logs/new", (req, res) => {
    res.render("new.ejs")
})

// DELETE //

// UPDATE //

// CREATE //
app.post("/logs", (req, res) => {
    if(req.body.shipIsBroken === "on"){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    Log.create(req.body, (error, createdLog) => {
        res.redirect("/logs")
    })
})

// EDIT //

// SHOW //

/// Listener ///
app.listen(port, () => {
    console.log("Listening on port", port);
})
