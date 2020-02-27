exports.up = function(knex) {
    return knex.schema
      .createTable('Items', tbl => {
        tbl.increments();
        tbl.text('Owner')
          .notNullable();
        tbl.text('Title')
          .notNullable();
          tbl.text('Type')
          .notNullable();
        tbl.text('Description')
          .notNullable();
        tbl.text('Price')
          .notNullable();
        tbl.text('Availability')
          .notNullable();
        tbl.text('Brand');
        tbl.text('Model');
        tbl.text('imgURL');
        tbl.text('Renter');
      })
      .createTable('Users', tbl => {
        tbl.increments();
        tbl.text('Password')
          .notNullable();
        tbl.text('Email')
          .unique()
          .notNullable();
          tbl.text('FirstName')
          .notNullable();
        tbl.text('LastName')
          .notNullable();
        tbl.text('Phone');
        tbl.text('Address');
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('Users')
      .dropTableIfExists('Items');
  };