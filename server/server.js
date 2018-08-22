require('dotenv').config()
//express doesn't liek you going up a level with ../ so you need to install and import 
//path resove and use it with your sendfile locations
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
//const server = require('http').Server(app);

app.use(express.static(__dirname + './../'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL)

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + './../public/index.html'))
})

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
