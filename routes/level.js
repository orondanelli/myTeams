const models  = require('../models');
const express = require('express');
const router  = express.Router();

router.get('/',function(req, res) {
    models.Level.findAll({})
        .then(function(levels) {
            res.render('levels',{arraylevels: levels});
            console.log(levels);
        });
});

router.post('/create', function(req, res) {
    models.Level.create({
        levelName: req.body.levelName,
        levelpriority: req.body.selectPriorityLevel
    }).then(function() {
        res.redirect('/niveles');
    });
});

router.get('/:level_id/delete', function(req, res) {
    models.Level.destroy({
        where: {
            id: req.params.level_id
        }
    }).then(function() {
        res.redirect('/niveles');
    });
});

router.get('/:level_id/update', function(req, res) {
    models.Level.findById(req.params.level_id)
        .then(function(level) {
            res.render('levels_edit',{arrayLevels: JSON.stringify(level)});
            console.log(JSON.stringify(level));
        });
});

router.put('/:level_id/update', function (req, res) {
    console.log(req.params.level_id);
    models.Level.update({
            levelName: req.body.levelName,
            levelpriority: req.body.selectPriorityLevel},
        {where: {id: req.params.level_id}}
    )
        .then(function(rowsUpdated) {
            console.log(rowsUpdated);
            res.redirect('/niveles');
        })
        .catch(function (err){
                console.log(err);
            }
        )
})

module.exports = router;
