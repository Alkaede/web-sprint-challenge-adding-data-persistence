
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('project_id');
      tbl.string('project_name', 150).notNullable().unique();
      tbl.text('project_description');
      tbl.boolean('project_completed');
    })
    .createTable('tasks', tbl => {
      tbl.increments('task_id');
      tbl.string('task_description', 150).notNullable().unique();
      tbl.string('task_notes');
      tbl.boolean('task_completed');
      tbl.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .notNullable()
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
    .createTable('resources', tbl => {
      tbl.increments('resource_id');
      tbl.string('resource_name', 150).notNullable().unique();
      tbl.text('resource_description')
    })
    .createTable('resource_assignments', tbl => {
      tbl.increments('resource_assignment_id');
      tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .notNullable()
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT');
      tbl
        .integer('resource_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .notNullable()
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('resource_assignments')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
