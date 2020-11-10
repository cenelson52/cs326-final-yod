import {createServer} from 'http';
import {parse} from 'url';
import * as _express from "express";
import * as faker from "faker";

const file = await fetch("/database.js");
const app = express();

createServer(async (req, res) => {
    const parsed = parse(req.url, true);
    if(parsed.pathname === '/getgames'){
        let body = [];
        for(let x = 0; x < 5; x++){
            body.push({'name': faker.companyName, 'players': [faker.name, faker.name, faker.name]});
        }
        res.end(JSON.stringify(body));
    }
    else if(parsed.pathname === '/game'){
        res.end(JSON.stringify({'name': req.name, 'players': [faker.name, faker.name, faker.name]}));
    }
    else if(parsed.pathname === '/creategame'){
        res.end(JSON.stringify(req.game));//assumes that /creategame is sending a game object, and returns it right back after the saving process
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
