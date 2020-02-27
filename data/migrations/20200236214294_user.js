exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("users", user => {
      user.increments();
      user
        .string("username", 32)
        .notNullable()
        .unique();
      user
        .string("password", 128)
        .notNullable();
      user
        .string("email", 50);
      user
        .string("firstname");
      user
        .string("lastname");
      user
        .string("phone");
      user
        .string("address");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists("users");
};