// build your `Project` model here
const db = require('../../data/dbConfig');

const getProjects = () => {
  return db('projects as p')
  .select('p.project_id', 'p.project_name', 'p.project_description', 'p.project_completed')
}

const addProject = async (project) => {
  // {"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}
  const [project_id] = await db('projects').insert(project);
  return getProjects().where({project_id}).first();
}

module.exports = {
  getProjects,
  addProject
}