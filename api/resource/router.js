// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model');

const resRouter = express.Router();

resRouter.get('/resources', (req, res, next) => {
  Resources.get()
    .then(resources => {
      if(resources){
        res.status(200).json({message: 'resource router'})
      }else{
        res.status(400).json({message: 'Project request fail'})
      }
    })
    .catch(next)
})


module.exports = resRouter;