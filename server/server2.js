
import express from 'express';
import {parse} from 'url';
import pkg from 'pg';
const app = express();
import {join} from 'path';

app.use(express.static('../client'));











app.listen(process.env.PORT || 8080);