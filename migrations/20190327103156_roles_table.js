// new changes we need to make
exports.up = function (knex) {                   // make sure you return from this!
  return knex.schema.createTable('roles', function (tbl) {
    // primary key to configure table: called id and make it auto-increment
    tbl.increments();

    tbl.string('name', 128)
      .notNullable()
      .unique() // <type> (<column name>, <size>)

    // tbl.unique('name');
  })
};

// how to undo the changes made in the up function
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('roles');
};
