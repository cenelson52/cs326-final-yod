import express from 'express';
import {parse} from 'url';
import pkg from 'pg';
const {Client} = pkg;
const app = express();
import {join} from 'path';
import passport from 'passport';
import * as tempStrat from "passport-local";
import * as MiniCrypt from './miniCrypt.js';
const localStrat = tempStrat.Strategy;
const crypt = MiniCrypt;
const database = new Client(process.env.DATABASE_URL);
database.connect;


passport.use(new localStrat(
    { usernameField: 'username' },
    (username, password, done) => {
      console.log('Inside local strategy callback')
      const user = database.query(`SELECT 1 FROM user_table WHERE username = ${username})`);
      if(username === user.username && crypt.check(user.password[0], user.password[1], password)){
        return done(null, user)
      }
    }
  ));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('./client'));

app.get("/", function(req, res, next){
    res.redirect('/login.html');
    next();
});

app.get("/accountcreate.html", function(req, res, next){
    res.redirect('/accountcreate.html');
    next();
});

app.get("/gamecreate.html", function(req, res, next){
    //Needs to verify that you're logged in
    res.redirect('/gamecreate.html');
    next();
});

app.get("/match.html", function(req, res, next){
    //Verify necessary game id
    res.redirect('/accountcreate.html');
    next();
});

app.get("/account.html", function(req, res, next){
    //Can't do this one yet as I need to be able to have our account's 
});

app.get("/game.html", function(req, res, next){
    //Can't do this one yet as I need to be able to have our account's 
});

app.get("/login.html", function(req, res, next){
    //Can't do this one yet as I need to be able to have our account's 
});

app.get("/homepage.html", function(req, res, next){
    //Can't do this one yet as I need to be able to have our account's 
});

app.post("/login", function(req, res){
    passport.authenticate('local', callback(err, user, info));
    //NOT DONE
})

app.get("/getgames", function(req, res){
    //TODO: ADD WAY TO GET USERNAME
    const games = database.query(`SELECT * FROM game_table WHERE userid = ${req.data.username}`);
    res.body.add(JSON.stringify(games));
});







app.listen(process.env.PORT || 8080);

// createServer(async (req, res) => {
//     const parsed = parse(req.url, true);
//     if(parsed.pathname === '/getgames'){
//         database.query();//SELECTs the games that are associated w/ a given user
//     }//TODO
//     else if(parsed.pathname === '/game'){
//         database.query();//SELECTs the right game from a user's games
//     }//TODO
//     else if(parsed.pathname === '/creategame'){
//         database.query();//One to add it to the user's game ids
//         database.query();//One to add it to the game table
//     }//TODO
//     else if(parsed.pathname === '/match'){//returns array of matches based off of a given game
//         if (! "game" in req.body){
//             const matches = [];
//             for(let x = 0; x < file.games.length; x++){
//                 matches.push(file.games[x].matches);
//             }
//             res.end(JSON.stringify(matches));
//         }
//         else{
//             res.end(JSON.stringify(file.games.matches));
//         }
//     }
//     else if(parsed.pathname === '/creatematch'){//idk how to update an existing game unless we have an actual active database, which we do not
//         //TODO
//     }
//     else if(parsed.pathname === '/account'){//TODO
//         res.end(JSON.stringify(
//             file.accounts
//         ));
//     }
//     else if(parsed.pathname === '/createaccount'){
//         //not sure if this actually works correctly
//         database.query(`INSERT INTO user_table (username, password, dob, games) VALUES (${req.data.username}, ${crypt.prototype.hash(req.data)}, ${req.data.dob}, ${req.data.games})`);
//         //idk how to auto-login after this finishes, but this is what the internet tells me to do for the database queries
//         res.end();
//     }
// }).listen(process.env.PORT || 8080);
