var express = require('express');
var router = express.Router();
var Video =require('../models/video');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/videoloading', function(req, res) {
    Video.getAll(null, function(err, videos) {
        if(err) {
            videos = [];
        }
        res.send(JSON.stringify(videos));
    });
});


module.exports = router;
