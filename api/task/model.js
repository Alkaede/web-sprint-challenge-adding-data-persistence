// build your `Task` model here
const db = require('../../data/dbConfig');

const getTasks = async () => {
  return db('tasks as t')
    .leftJoin('projects as p','p.project_id','t.task_id')
    .select('t.task_id','t.task_description', 't.task_notes','t.task_completed')
}

const addTask = async (task) => {
  const [task_id] = await db('tasks').insert(task)
  return getTasks().where({task_id}).first();
}

module.exports = {
  getTasks,
  addTask
}