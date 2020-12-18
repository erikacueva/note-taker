var path = require("path");

module.exports = function(app) {

    // HTML GET Requests

    app.get("/notes", function (req, res){

        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // if not matching route is found default to index

    app.get("*", function (req, res){

        res.sendFile(path.join(__dirname, "../public/index.html"));
    });


};