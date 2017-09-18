var friends = require("../data/friends.js");

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
        console.log("BREAK");
        res.json(friends);
    });
    
    app.post("/api/friends", function(req, res) {
        var newSurvey = req.body;
        var userScore = newSurvey.scores;
        
        var matchName = "";
        var matchPhoto = "";
        var totalDif = 10000;
        
        for(var i = 0; i < friends.length; i++) {
            console.log('friend = ' + JSON.stringify(friends[i]));
            
            var dif = 0;
            
            for (var j = 0; j < userScore.length; j++) {
				dif += Math.abs(friends[i].scores[j] - userScore[j]);
			}
            
            if(dif < totalDif) {
                totalDif = dif;
                matchName = friends[i].name;
                matchPhoto = friends[i].photo;
            }
        }
        
        friends.push(newSurvey);
        
        res.json({status: 'OK', matchName: matchName, matchPhoto: matchPhoto});
    });
}