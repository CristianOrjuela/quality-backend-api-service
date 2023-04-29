// Imports
const express = require('express');
const { Router } = require('express');

// Initializing the router
const router = express.Router();

const callBackTemporal = (req, res) => {
  res.json({data: 'Hola'});
};

// List of routes
router.get('/list', callBackTemporal );
router.get('/list-other-thing', callBackTemporal );
router.post('/list', callBackTemporal );
router.put('/list', callBackTemporal );

// Exporting the component
module.exports = router;