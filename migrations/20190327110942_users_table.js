// new changes we need to make
exports.up = function (knex) {                   // make sure you return from this!
  return knex.schema.createTable('users', function (tbl) {
    // primary key to configure table: called id and make it auto-increment
    tbl.increments();

    tbl.string('name', 128)
      .notNullable()
      .unique() // <type> (<column name>, <size>)

    // tbl.unique('name');

    //foreign                   // for more info see tomorrow's lecture
    tbl.integer('role_id')    // the column name in this table (users)
      .unsigned()             // <-- we will learn more about this tomorrow
      .references('id')       // primary key in the related (parent) table (roles)
      .inTable('roles')       // as seen here
      .onDelete('CASCADE')    //
      .onUpdate('CASCADE');   //
  })
};

// how to undo the changes made in the up function
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('roles');
};

