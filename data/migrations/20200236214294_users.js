exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("users", users => {
      users.increments();
      users
        .string("username", 32)
        .notNullable()
        .unique();
      users
        .string("password", 128)
        .notNullable();
      users
        .string("email", 50);
      users
        .string("firstname");
      users
        .string("lastname");
      users
        .string("phone");
      users
        .string("address");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists("users");
};