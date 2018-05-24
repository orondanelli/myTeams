var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    models.Level.findAll().then(function (levels) {
        console.log(levels);
        res.render('levels', {arraylevels: levels});
    });
});

router.post('/create', function (req, res, next) {
    models.Level.create({
        levelName: req.body.levelName
    }).then(function () {
        res.redirect('/nivel');
    });
});

router.get('/:level_id/delete', function (req, res) {
    models.Level.destroy({
        where: {
            id: req.params.level_id
        }
    }).then(function () {
        res.redirect('/nivel');
    });
});

module.exports = router;