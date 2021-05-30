// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model');

const router = express.Router();

router.get('/projects', (req, res, next) => {
  Projects.getProjects()
    .then(project => {
      if(project){
        res.status(200).json(project)
      }else{
        res.status(400).json({message: 'Project request fail'})
      }
    })
    .catch(next)
})

router.post('/projects', (req, res, next) => {
  Projects.addProject(req.body)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(next)
})


module.exports = router;