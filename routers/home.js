const express = require("express");
const router = express.Router();


const { 
    homehandler, homeHandler 
} = require('../controllers/home');

router.get('/' , homeHandler);


module.exports = router;