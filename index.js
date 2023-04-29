// Imports
const express = require('express');

// Using express
const app_server = express();

// Defining API port
app_server.set('port', process.env.PORT || 4000);

// Middleware
app_server.use(express.json());

// Listen server
app_server.listen( app_server.get('port'), () => {
  console.log("Server is running in port: ", app_server.get('port'));
});