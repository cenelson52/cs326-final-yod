import {createServer} from 'http';
import {parse} from 'url';
import * as _express from "express";
import * as faker from "faker";
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
        res.end(JSON.stringify(req.game));//assumes that /creategame is sending a game object, and returns it right back after the saving process (which does not exist for the dummy server)
    }
    else if(parsed.pathname === '/match'){

    }
    else if(parsed.pathname === '/creatematch'){

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
        
        
    }
    else if(parsed.pathname === '/tourney'){

    }
    else if(parsed.pathname === '/tourneycreate'){

    }
    
}).listen(process.env.PORT || 8080);
