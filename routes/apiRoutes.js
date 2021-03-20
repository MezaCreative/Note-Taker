// Load data
let db = require("../db/db.json");
const fs = require("fs");


// Routing
module.exports = function(app) {
    // API GET requests
    // When user vists page...
    
    app.get("/api/notes", function(req, res) {
        // newDb = ()
     
        // res.json(db);
        // console.log(db);
        fs.readFile("db/db.json", "utf8" ,function(err, data) {
            if (err) throw err;
            res.json(JSON.parse(data));
        } );
    });

    app.post("/api/notes", function(req, res) {
        const newNote = req.body;
        fs.readFile("db/db.json", "utf8" ,function (err, data) {
            
            const parseData = JSON.parse(data);
         
            let id = 0;
            if (parseData.length > 0 ) {
                id = parseData[parseData.length -1].id + 1;
            }
            if (err) throw err;
            newNote.id = id;
            //db.push(newNote);
             parseData.push(newNote);

            fs.writeFile("db/db.json", JSON.stringify(parseData), function (err, data) {
            if (err) throw err;
            res.json(newNote);
        });
        })
        

        
        // db.push(req.body);
        // res.json(true);
    });

    app.delete("/api/notes/:id", function(req, res) {
        fs.readFile("db/db.json", "utf8" ,function(err, data) {
            if (err) throw err;
            let parseData = JSON.parse(data);
            let noteToRemove = 0;
            console.log("parse data is ", parseData);
            console.log("req params id is ", req.params.id);
            for (var i = 0; i < parseData.length; i++) {
                if (parseData[i].id == req.params.id) {
                        noteToRemove = i;
                        
                }
            }
            console.log("attempting to remove" , noteToRemove);
              parseData.splice(noteToRemove, 1);
             console.log("parse data is", parseData);
            // for each ()
            // res.json(JSON.parse(data));
            fs.writeFile("db/db.json", JSON.stringify(parseData), function (err) {
                if (err) throw err;
                   res.json(parseData);
            });
        } );
        //Empty out arrays of note
        // res.json({ok:true});
    });
};