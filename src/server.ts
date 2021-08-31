import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

dotenv.config();

const server = express();

//mustache conf
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//return to static page or public page
server.use(express.static(path.join(__dirname,'../public')));

//routes

server.listen(process.env.PORT);