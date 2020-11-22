
import {createServer} from 'http';
import {parse} from 'url';
import pkg from 'pg';
const {Client} = pkg;
import * as MiniCrypt from './miniCrypt.js';
import * as fs from "fs";
import * as _express from "express";
const express = _express["default"];
const app = express();
const database = new Client(process.env.DATABASE_URL);
database.connect;
const crypt = MiniCrypt;

createServer(async (req, res) => {
    const parsed = parse(req.url, true);
    //TODO
    //this might
    if(parsed.pathname === '/'){
        fs.readFileSync("./client/login.html", function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
         });
    }
    else if(parsed.pathname === '/getgames'){
        database.query();//SELECTs the games that are associated w/ a given user
    }//TODO
    else if(parsed.pathname === '/game'){
        database.query();//SELECTs the right game from a user's games
    }//TODO
    else if(parsed.pathname === '/creategame'){
        database.query();//One to add it to the user's game ids
        database.query();//One to add it to the game table
    }//TODO
    else if(parsed.pathname === '/match'){//returns array of matches based off of a given game
        if (! "game" in req.body){
            const matches = [];
            for(let x = 0; x < file.games.length; x++){
                matches.push(file.games[x].matches);
            }
            res.end(JSON.stringify(matches));
        }
        else{
            res.end(JSON.stringify(file.games.matches));
        }
    }
    else if(parsed.pathname === '/creatematch'){//idk how to update an existing game unless we have an actual active database, which we do not
        //TODO
    }
    else if(parsed.pathname === '/account'){//TODO
        res.end(JSON.stringify(
            file.accounts
        ));
    }
    else if(parsed.pathname === '/createaccount'){
        //not sure if this actually works correctly
        database.query(`INSERT INTO user_table (username, password, dob, games) VALUES (${req.data.username}, ${crypt.prototype.hash(req.data)}, ${req.data.dob}, ${req.data.games})`);
        //idk how to auto-login after this finishes, but this is what the internet tells me to do for the database queries
        res.end();
    }
}).listen(process.env.PORT || 8080);
