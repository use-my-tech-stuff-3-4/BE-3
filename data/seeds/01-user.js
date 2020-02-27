const bcrypt = require('bcryptjs');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: "benson@gmail.com", password: bcrypt.hashSync("password", 10), firstname: "benson", lastname: "lei", phone: "1111111", address: "111 avenue"},
        {email: "sarah@gmail.com", password: bcrypt.hashSync("password", 10), firstname: "sarah", lastname: "lee", phone: "22222222", address: "222 drive"},
        {email: "bazen@gmail.com", password: bcrypt.hashSync("password", 10), firstname: "bazen", lastname: "berhane", phone: "3333333", address: "333 street"},
        {email: "michael@gmail.com", password: bcrypt.hashSync("password", 10), firstname: "michael", lastname: "redig", phone: "4444444", address: "444 parkway"},
        {email: "bryant@gmail.com", password: bcrypt.hashSync("password", 10), firstname: "bryant", lastname: "patton", phone: "5555555", address: "555 blvd"},
        {email: "oluwatimileyin@gmail.com", password: bcrypt.hashSync("password", 10), firstname: "oluwatimileyin", lastname: "ojo", phone: "6666666", address: "666 city"},
        {email: "philip@gmail.com", password: bcrypt.hashSync("password", 10), firstname: "philip", lastname: "johnson", phone: "7777777", address: "777 state"},
        {email: "scott@gmail.com", password: bcrypt.hashSync("password", 10), firstname: "scott", lastname: "vojik", phone: "8888888", address: "888 cross street"},
        {email: "sorin@gmail.com", password: bcrypt.hashSync("password", 10), firstname: "sorin", lastname: "chris", phone: "9999999", address: "999 alley way"},
        {email: "chariton@gmail.com", password: bcrypt.hashSync("password", 10), firstname: "chariton", lastname: "shumway", phone: "1234567", address: "123 residence"},
      ]);
    });
};