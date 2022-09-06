///DEPENDENCIES///
const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const port = 3000;

/// Listener ///
app.listen(port, () => {
    console.log("Listening on port", port);
})
