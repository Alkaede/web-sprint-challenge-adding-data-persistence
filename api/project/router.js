// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model');

const router = express.Router();

router.get('/projects', (req, res, next) => {
  Projects.get()
    .then(projects => {
      if(projects){
        res.status(200).json({message: 'projects router'})
      }else{
        res.status(400).json({message: 'Project request fail'})
      }
    })
    .catch(next)
})


module.exports = router;