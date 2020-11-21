
import {createServer} from 'http';
import {parse} from 'url';
import {writeFile, readFileSync, existsSync} from 'fs';
import * as pg from "pg";
import "miniCrypt.js";
import miniCrypt from './miniCrypt';
import { response } from 'express';
const database = new pg.Client(process.env.DATABASE_URL);
database.connect();
const crypt = new miniCrypt();
const app = express();
const path = require('path');

createServer(async (req, res) => {
    const parsed = parse(req.url, true);
    //TODO
    if(parsed.pathname === '/getgames'){
        res.end(JSON.stringify());
    }
    else if(parsed.pathname === '/game'){
        for(let x = 0; x < file.games.length; x++){
            if(file.games[x].name === req.game){
                res.end(JSON.stringify(file.games[x]));
            }
        }
        res.end("no game");
    }
    else if(parsed.pathname === '/creategame'){
        //TODO
    }
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
    else if(parsed.pathname === '/creatematch'){//idk how to update an existing game unless we have an actual active database, which we do not :(
        //TODO
    }
    else if(parsed.pathname === '/account'){
        res.end(JSON.stringify(
            //TODO: THIS IS CONNECTED WITH THE LOGIN.
            file.accounts
        ));
    }
    else if(parsed.pathname === '/createaccount'){
        //not sure if this actually works correctly
        database.query(`INSERT INTO user_table (username, password, dob, games) VALUES (${req.data.username}, ${crypt.prototype.hash(req.data)}, ${req.data.dob}, ${req.data.games}`);
        //idk how to auto-login after this finishes, but this is what the internet tells me to do for the database queries
        res.end();
}).listen(process.env.PORT || 8080);
