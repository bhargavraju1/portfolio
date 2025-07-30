const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');
console.log("bhargav")
router.post('/contact', submitContactForm);


module.exports = router;
