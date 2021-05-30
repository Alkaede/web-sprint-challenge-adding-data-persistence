// build your `Task` model here
const db = require('../../data/dbConfig');

const getTasks = () => {
  return db('tasks as t')
    .leftJoin('projects as p','p.project_id','t.task_id')
    .select('t.task_id','t.task_description', 't.task_notes','t.task_completed')
}

module.exports = {
  getTasks
}