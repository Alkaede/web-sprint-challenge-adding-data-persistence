// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model');

const tasRouter = express.Router();

tasRouter.get('/tasks', (req, res, next) => {
  Tasks.get()
    .then(tasks => {
      if(tasks){
        res.status(200).json({message: 'tasks router'})
      }else{
        res.status(400).json({message: 'Project request fail'})
      }
    })
    .catch(next)
})


module.exports = tasRouter;