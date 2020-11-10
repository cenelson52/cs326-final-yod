import {createServer} from 'http';
import {parse} from 'url';
import * as _express from "express";
import * as faker from "faker";
const app = express();

createServer(async (req, res) => {
    const parsed = parse(req.url, true);
    if(parsed.pathname === '/game'){
        let body = [];
        for(let x = 0; x < 5; x++){
            body.push({'name': faker.companyName, 'players': [faker.name, faker.name, faker.name]});
        }
        res.end(JSON.stringify(body));
    }
    else if(parsed.pathname === '/creategame'){
        
    }
    else if(parsed.pathname === '/match'){

    }
    else if(parsed.pathname === '/create match'){

    }
    else if(parsed.pathname === '/account'){

    }
    else if(parsed.pathname === '/createaccount'){

    }
}).listen(process.env.PORT || 8080);
