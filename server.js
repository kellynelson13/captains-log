///DEPENDENCIES///
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const port = 3000;

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
    res.send(req.body)
})

// EDIT //

// SHOW //

/// Listener ///
app.listen(port, () => {
    console.log("Listening on port", port);
})
