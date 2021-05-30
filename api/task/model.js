// build your `Task` model here
const db = require('../../data/dbConfig');

const get = () => {
  return db('tasks')
}

module.exports = {
  get
}