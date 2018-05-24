const models  = require('../models');
const express = require('express');
const router  = express.Router();

router.get('/',function(req, res) {
    models.Level.findAll()
        .then(function() {
            models.Team.findAll({})
                .then(function(teams) {
                    res.render('teams',{arrayTeams: teams});
                    console.log(teams);
                });
            /*
              models.Team.findAll({include: [models.Level]})
                  .then(function(teams) {
                      res.render('teams',{arrayTeams: teams,arrayLevels:level});
                  console.log(teams);
                  });
                */
        });
});
//models.Team.findAll({include: [models.Level]})

router.post('/create', function(req, res) {
    models.Team.create({
        teamName: req.body.teamName,
        areaName: req.body.selectAreaName
        //,LevelId: req.body.selectLevelName
    }).then(function() {
        console.log(req.body.selectLevelName);
        res.redirect('/equipos');
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

router.get('/:team_id/update', function(req, res) {
    models.Team.findById(req.params.team_id)
        .then(function(team) {
            res.render('teams_edit',{arrayTeams: JSON.stringify(team)});
            console.log(JSON.stringify(team));
        });
});

router.put('/:team_id/update', function (req, res) {
    console.log(req.params.team_id);
    console.log(req.body.teamName);
    models.Team.update({
            teamName: req.body.teamName,
            teamArea: req.body.selectAreaName},
        {where: {id: req.params.team_id}}
    )
        .then(function(rowsUpdated) {
            console.log(rowsUpdated);
            res.redirect('/equipos');
            console.log(req.params.team_id);

        })
        .catch(function (err){
                console.log(err);
            }
        )
})

module.exports = router;
