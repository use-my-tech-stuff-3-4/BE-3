exports.up = function(knex) {
    return knex.schema
      .createTable('Items', tbl => {})
      .createTable('Users', tbl => {})
      ;
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('Users')
      .dropTableIfExists('Items');
  };