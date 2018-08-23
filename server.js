const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path');
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
//creates server instance
const server = require('http').Server(app)
//creates socket using instance of server
const io = require('socket.io')(server);




app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/public/index.html'))
})

io.on('connection', sockets)

function sockets(socket){
    console.log('user connected');
    io.emit('user connected')
    socket.on('disconnect', function(){
        console.log('user disonnected')
    })
    socket.on('disconnect', function(){
        console.log('user disconnected')
    })
}

server.listen(3000, function(){
    console.log('listening on port 3000')
})
// io.emit('connection', function(socket){
//     console.log('user connected');
//     socket.emit('disconnect', function(){
//         console.log('user disconnected')
//     })
// })


// // Serve the files on port 5000.
// app.listen(5000, function () {
//   console.log('Example app listening on port 5000!\n');
// });