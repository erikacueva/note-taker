// load data

const notes = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

// routing
module.exports = function (app) {
  // API GET request
  app.get("/api/notes", function (req, res) {
    res.json(notes);
  });

  // API POST Requests

  app.post("/api/notes", function (req, res) {
    console.log(req.body);
    req.body.id = uuidv4();
    notes.push(req.body);
    // fs.writeFile to overwrite your notes in the db.json file, week9, activiyt 13???
    // put res.json(notes) inside fs.writeFile because of asynchronicity
    res.json(notes);
  });

  // code to clear notes
  app.delete("/api/notes/:id", function (req, res) {
      console.log(req.params.id);
      //fs.readFile to get notes
      // for loop to get rid of note that matches the id
      // fs.writeFile to overwrite your db.json file with the notes array that no longer has that note
  })
};
