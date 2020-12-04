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

app.get("/getgames", function(req, res){
    //TODO: ADD WAY TO GET USERNAME
    const games = database.query(`SELECT * FROM game_table WHERE userid = ${req.data.username}`);
    res.body.add(JSON.stringify(games));
    res.end();
});

app.get("/game", function(req, res){
    const game = database.query(`SELECT * FROM game_table WHERE gameid = ${req.data.id}`);
    res.body.add(JSON.stringify(game));
    res.end();
});

app.post("/creategame", function(req, res){
    const newGame = database.query(`INSERT INTO game_table (name, descrip, matches, stats) VALUES (${req.data.name}, ${req.data.descrip}, ${req.data.matches}, ${req.data.stats})`);
    res.end();
});


app.listen(process.env.PORT || 8080);

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
