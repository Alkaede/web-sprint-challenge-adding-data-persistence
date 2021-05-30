// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model');

const resRouter = express.Router();

resRouter.get('/resources', (req, res, next) => {
  Resources.getResources()
    .then(resources => {
      if(resources){
        res.status(200).json(resources)
      }else{
        res.status(400).json({message: 'Project request fail'})
      }
    })
    .catch(next)
})

resRouter.post('/resources', (req, res, next) => {
  Resources.addResource(req.body)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(next)
})

module.exports = resRouter;