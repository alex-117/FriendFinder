// npm packages
var bodyParser = require("body-parser");
var path = require("path");
var express = require("express");
var app = express();
// set port
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// grabbing paths from apiRoutes
// grabbing paths from htmlRoutes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// app 'listening' for port to run application on
app.listen(port, function() {
   console.log("App listening on PORT " + port); 
});
