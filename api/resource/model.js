// build your `Resource` model here
const db = require('../../data/dbConfig');

const getResources = () => {
  return db('resources as r')
    .select('r.resource_id', 'r.resource_name', 'r.resource_description')
}

const addResource = async (resource) => {
  const [resource_id] = await db('resources').insert(resource)
  return getResources().where({resource_id}).first();
}

module.exports = {
  getResources,
  addResource
}