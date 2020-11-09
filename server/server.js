import {createServer} from 'http';
import {parse} from 'url';
import {join} from 'path';
import {writeFile, readFileSync, existsSync, fstat} from 'fs';

createServer(async (req, res) => {
    const parsed = parse(req.url, true);
    
    
    
}).listen(8080);
