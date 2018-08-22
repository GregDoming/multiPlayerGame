require('dotenv').config()
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');





app.use(express.static(__dirname + '../public/'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + './../public/index.html'))
})

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));


// request('http://localhost:3000/scores')