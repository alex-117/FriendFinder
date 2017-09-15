var friends = require("../data/friends.js");

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        console.log("BREAK");
        res.json(friends);
//        res.send("Hello");
    });
    
    app.post("/api/friends", function(req, res) {
       // post logic 
    });
}