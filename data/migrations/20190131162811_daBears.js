
exports.up = function(knex, Promise) {
    return knex.schema.createTable('daBears', tbl => {
        tbl.increments();

        tbl.string('name', 128).notNullable().unique();
    })
  
};

exports.down = function(knex, Promise) {
    // undo the operation in up
    return knex.schema.dropTableIfExists('daBears');

  
};
