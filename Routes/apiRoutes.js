// load data

const notes = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { json } = require("express");

// routing
module.exports = function (app) {
  // API GET request
  app.get("/api/notes", function (req, res) {
    res.json(notes);
  });

  // API POST Requests

  app.post("/api/notes", function (req, res) {
    console.log(req.body);
    const newNote = req.body;
    newNote.id = uuidv4();
    notes.push(req.body);
    fs.writeFile("notes.html", JSON.stringify(notes), (err) => {
      if (err) throw err;
    });
    // fs.writeFile to overwrite your notes in the db.json file, week9, activiyt 13???
    // put res.json(notes) inside fs.writeFile because of asynchronicity
    res.json(JSON.stringify(notes));
  });

 

  app.delete("/api/notes/:id", function (req, res) {
    let noteDelete = req.params.id;
    let nn = JSON.parse(data);
    nn = noteDelete.filter(function(notes){
      if (nn != notes.nn) {
        return true;
      }
      else {
        return false;
      };
    }); 
      fs.writeFile("notes.html", JSON.stringify(notes), (e) => {
        if (e) throw e;
      });
      res.json(JSON.stringify(notes));
    });
  

  //get the data - readFile
  //modify the data - filter or ad new note
  //write the notes back to db- writeFile
};
