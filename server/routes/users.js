var express = require('express');
var router = express.Router();
var addData = require('../controllers/usersQuery');
/* GET users listing. */
router.post('/',addData);

module.exports = router;
