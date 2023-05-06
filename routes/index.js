// Imports
const express = require('express');

// Imports controllers
const { getListUsers, getListProducts, createUsers } = require('../controllers/index');

// Initializing the router
const router = express.Router();

// List of routes

// List users
router.get('/list-users', getListUsers );

// Create user
router.post('/create-user', createUsers );

// Exporting the component
module.exports = router;