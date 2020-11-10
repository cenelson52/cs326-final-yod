import {createServer} from 'http';
import {parse} from 'url';
import * as _express from "express";
import * as faker from "faker";
import {writeFile, readFileSync, existsSync} from 'fs';

const file = await fetch("/database.json");
const app = express();


let database;
if (existsSync("database.json")) {
    database = JSON.parse(readFileSync("database.json"));
} else {
    database = {
        accounts: [],
        games: []
    };
}


createServer(async (req, res) => {
    const parsed = parse(req.url, true);
    if(parsed.pathname === '/getgames'){
        res.end(JSON.stringify(file.games));
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
            database.accounts
        ));
    }
    else if(parsed.pathname === '/createaccount'){
        //not sure if this actually works correctly
        let body = '';
        req.on('data', data => body += data);
        req.on('end', () => {
            const data = JSON.parse(body);
            database.accounts.push({
                username: data.username,
                password: data.password,
                email: data.email,
                DoB: data.DoB
            });
            writeFile("database.json", JSON.stringify(database), err => {
                if (err) {
                    console.err(err);
                } else res.end();
            });
        });
}).listen(process.env.PORT || 8080);
