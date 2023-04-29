// Imports
const express = require('express');

// Using express
const app_server = express();

// Defining API port
app_server.set('port', process.env.PORT || 4000);

// Middleware
app_server.use(express.json());

// Database connection
const { db_connection } = require('./database/db_connection');

// Routing management
app_server.use('/api/v1/', require('./routes/index'));

try {

  // Trying the database connection
  const db_status = db_connection.authenticate();
  console.log("Connected to the database successfully", db_status);

} catch (error) {
  console.log("Unable to connect to database", error);
}

// Listen server
app_server.listen( app_server.get('port'), () => {
  console.log("Server is running in port: ", app_server.get('port'));
});