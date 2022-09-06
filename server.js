///DEPENDENCIES///
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const port = 3000;


/// ROUTES ////

// INDEX //

// NEW //
app.get("/logs/new", (req, res) => {
    res.render("new.ejs")
})

// DELETE //

// UPDATE //

// CREATE //

// EDIT //

// SHOW //

/// Listener ///
app.listen(port, () => {
    console.log("Listening on port", port);
})
