// Dependencies
const express = require("express");
// Express Config
// Tells node to create "express"
const app = express();

// set initial port
const PORT = process.env.PORT || 8080;
// Sets up Express app to handle data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
// Router
// Points server to series of "route" files

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listener
// Starts the server
app.listen(PORT, function() {
    console.log("App is listening on PORT:" + PORT);
});
