// require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const server = express();

const bearRoutes = require('./allRouters/routes');

// const recipesR = require("./allRoutes/recipesR");
// const dishesR = require("./allRoutes/dishesR ");
// const db = require("./data/helpers/dataAccessFunct");



server.use(express.json());
server.use(helmet());


server.use('/api/daBears', bearRoutes);




//routes
server.get('/', (req, res) => {
    res.status(200).send(`API working.\n Sanity Check\n Test Route!`);
  });
  
  
  
  module.exports = server;