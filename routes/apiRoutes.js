// Load data
let db = require("../db/db.json");



// Routing
module.exports = function(app) {
    // API GET requests
    // When user vists page...
    
    app.get("/api/notes", function(req, res) {
        res.json(db);
    });

    app.post("/api/notes", function(req,res) {
        db.push(req.body);
        res.json(true);
    });

    app.post("/api/clear", function(req, res) {
        //Empty out arrays of note
        db.length = 0;
        res.json({ok:true});
    });
};