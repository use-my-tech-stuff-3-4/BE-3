
exports.up = function(knex) {
  return knex.schema
  .createTable("items", items => {
      items.increments();
      items
        .integer("owner")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("users");
      items
        .string("title")
        .notNullable();
      items 
        .string("type")
        .notNullable();
      items
        .string("description")
        .notNullable();
      items 
        .integer("price")
        .notNullable();
      items
        .boolean("availability")
        .notNullable();
      items 
        .string("brand")
      items 
        .string("model")
      items 
        .string("imgURL")
      items
        .integer("renter")
        .unsigned()
        .references("id")
        .inTable("users");
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("items")
};
