var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var Promise = require('bluebird');
var db = Promise.promisify(require('fh-mbaas-api').db);


function usersRouter(){
  var router = new express.Router();

  router.use(require('body-parser').json());

  router.get('/', function listUsers(req, res, next){
    db({
      act: 'list',
      type: 'users',
      eq: req.query

    })
    .then(function(data){
      res.json(data);
    })

  })
  return router;
}


module.exports = usersRouter;