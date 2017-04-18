var express = require('express')
var router = express.Router()
var path = require('path')

router.get('/api/dogs', require('./dogs'))

module.exports = router 
