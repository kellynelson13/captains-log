
const express = require('express');
const logRouter = express.Router();
const Log = require("../models/logs")

/// ROUTES ////

// INDEX //
logRouter.get("/", (req, res) => {
    Log.find({}, (error, allLogs) => {
        res.render("index.ejs", {
            logs: allLogs
        })
    })
})
    


// NEW //
logRouter.get("/new", (req, res) => {
    res.render("new.ejs")
})

// DELETE //
logRouter.delete("/:id", (req, res) => {
    Log.findByIdAndDelete(req.params.id, (error, data) => {
        res.redirect("/logs")
    })
})

// UPDATE //
logRouter.put("/:id", (req, res) => {
    if(req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    Log.findByIdAndUpdate(
        req.params.id, 
        req.body,
        {
            new:true,
        },
        (error, updatedLog) => {
            res.redirect(`/logs/${req.params.id}`);
    })
})


// CREATE //
logRouter.post("/", (req, res) => {
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
logRouter.get("/:id/edit", (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        res.render("edit.ejs", {
            log: foundLog,
        })
    })
    
})

// SHOW //
logRouter.get("/:id", (req, res) => {
    Log.findById(req.params.id, (error, foundLog) => {
        res.render("show.ejs", {
            log: foundLog,
        })
    })
})

module.exports = logRouter;