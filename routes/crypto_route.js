const express = require('express');
const  dotenv = require('dotenv');
const stats = require('../controller/stats');
const deviation = require('../controller/deviation') ; 
const dbConnection = require('../config/connection') ; 

const router = express.Router(); 

router.get('/stats' , stats ) ; 
router.get('/deviation' , deviation ) ; 

module.exports = router ;