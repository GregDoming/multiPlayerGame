const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path');
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
const server = require('http').Server(app)
const io = require('socket.io').listen(server);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
const port = 8000;

io.on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval', interval);
        setInterval(() => {
            client.emit('timer', new Date());
        }, setInterval(() => {          
        }, interval)
        )
    });
});

io.listen(port);

console.log('listening on port', port)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/public/index.html'))
})

// Serve the files on port 3000.
app.listen(5000, function () {
  console.log('Example app listening on port 5000!\n');
});