var User = require('../models/user');
var Repository = require('../models/repository');
module.exports = require('express').Router()
    .post('/user',function(req,res,next){
        var username = req.body.username;
        var user = new User({
            username : username,
        });
        user.save(function(err){
            res.json({});
        });
    })
    .post('/repository', function (req, res, next) {
        var name = req.body.name;
        var owner = '56d6a79e19298a7416baaae8';
        var repo = new Repository({
            name : name,
            owner : owner,
        });
        repo.save(function(err){
            res.json({});
        });
    })
    .get('/repository', function(req, res, next){
        Repository.find({},function(err,data){
            res.json({
                body : data,
            })
        })
    })