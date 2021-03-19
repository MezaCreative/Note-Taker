// Dependency
// Path package included to get correct file path for html
const path = require("path");

//Routing
module.exports = function(app) {
    // HTML Get Requests
    // When users visits a page, user is shown an HTML page of content

    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    // If no matching route is found default to index
    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}