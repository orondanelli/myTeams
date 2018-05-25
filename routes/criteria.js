const models  = require('../models');
const express = require('express');
const router  = express.Router();

router.get('/',function(req, res) {
    models.Level.findAll()
        .then(function(level) {
            models.Criteria.findAll({include: [models.Level]})
                .then(function(criteria) {
                    res.render('criteria',{arrayCriteria: criteria, arrayLevels:level});
                    console.log(level);
                    console.log(criteria);
                });
        });
});

router.post('/create', function(req, res) {
    models.Criteria.create({
        criteriaName: req.body.textNameCriteria,
        principleName: req.body.selectPrincipleName,
        officialValueNum:req.body.selectOficialValue,
        LevelId: req.body.selectLevelName
    }).then(function() {
        console.log(req.body.selectLevelName);
        res.redirect('/criterios');
    });
});

router.get('/:criteria_id/delete', function(req, res) {
    models.Criteria.destroy({
        where: {
            id: req.params.criteria_id
        }
    }).then(function() {
        res.redirect('/criterios');
    });
});

router.get('/:criteria_id/update', function(req, res) {
    models.Criteria.findById(req.params.criteria_id)
        .then(function(criteria) {
            res.render('criteria_edit',{arrayLevels: JSON.stringify(criteria)});
            console.log(JSON.stringify(criteria));
        });
});

module.exports = router;
