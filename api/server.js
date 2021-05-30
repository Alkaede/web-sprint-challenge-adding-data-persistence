// build your server here and require it from index.js
const express = require('express');
const ProjectRouter = require('./project/router');
const ResourceRouter = require('./resource/router');
const TaskRouter = require('./task/router');

const server = express();
server.use(express.json());
server.use('/api', ProjectRouter)
server.use('/api', ResourceRouter)
server.use('/api', TaskRouter)


// my error handler
server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;