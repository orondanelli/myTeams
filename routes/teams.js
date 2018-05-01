var models  = require('../models');
var express = require('express');
var router  = express.Router();
var flash = require('express-flash');
var session = require('express-session');

router.get('/',function(req, res) {
   models.Level.findAll()
    .then(function(level) {
        models.Team.findAll({include: [models.Level]})
            .then(function(teams) {
                res.render('teams',{arrayTeams: teams,arrayLevels:level});
            console.log(teams);
            });
    });
});
    //models.Team.findAll({include: [models.Level]})


router.post('/create', function(req, res, next) {
  models.Team.create({
    teamName: req.body.teamName,
    currentLevelInd: 'X',
    LevelId: req.body.selectLevelName
  }).then(function() {
        console.log(req.body.selectLevelName);
    res.redirect('/equipos');
    //res.render('teams',{exito:1, message: req.flash('success_messages')});

  });
});

router.get('/:team_id/delete', function(req, res) {
  models.Team.destroy({
    where: {
      id: req.params.team_id
    }
  }).then(function() {
    res.redirect('/equipos');
  });
});

module.exports = router;
