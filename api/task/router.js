// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model');

const tasRouter = express.Router();

tasRouter.get('/tasks', (req, res, next) => {
  Tasks.getTasks()
    .then(task => {
      if(task){
        res.status(200).json(task)
      }else{
        res.status(400).json({message: 'Project request fail'})
      }
    })
    .catch(next)
})

// tasRouter.post('/tasks', (req, res, next) => {
//   Tasks.addProject(req.body)
//     .then(task => {
//       res.status(201).json(task)
//     })
//     .catch(next)
// })


module.exports = tasRouter;