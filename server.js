let express = require('express');
let server = express();
// let config = require('config');
let bodyParser = require('body-parser');
// let student = require('./model/student');
// let mongoose = require('mongoose');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));

// const port = 8080;
server.get('/api', (req, res) => {
    res.send('Welcome to student API!!!');
});

server.get('/', (req, res) => {
    res.send('First API!!!');
});


server.get('/student', (req, res) => {
    res.send('Hello World!!!');
});

let port = 3000;
// server.listen(config.serverPort, (err) => {
server.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Server is listing on ' + port);
    // console.log('Server is listing on ' + config.serverPort);
});