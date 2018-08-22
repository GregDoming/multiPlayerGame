// import React from "react";
// import ReactDOM from "react-dom";
 import { render } from 'react-dom';
//require('dotenv').config();
import App from "./client/App";
//const express = require('express');
//const nodeExternals = require('webpack-node-externals');
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const server = require('http').Server(app);


mongoose.connect(process.env.MONGO_URL)

// app.get('/', function(req, res){

// })



ReactDOM.render(
  <App />,
  document.getElementById("content")
);