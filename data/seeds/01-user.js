const bcrypt = require('bcryptjs');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "benson", password: bcrypt.hashSync("password", 10), email: "blei@gmail.com", firstname: "benson", lastname: "lei", phone: "1111111", address: "111 avenue"},
        {username: "sarah", password: bcrypt.hashSync("password", 10), email: "slee@gmail.com", firstname: "sarah", lastname: "lee", phone: "22222222", address: "222 drive"},
        {username: "bazen", password: bcrypt.hashSync("password", 10), email: "bberhane@gmail.com", firstname: "bazen", lastname: "berhane", phone: "3333333", address: "333 street"},
        {username: "michael", password: bcrypt.hashSync("password", 10), email: "mredig@gmail.com", firstname: "michael", lastname: "redig", phone: "4444444", address: "444 parkway"},
        {username: "bryant", password: bcrypt.hashSync("password", 10), email: "bpatton@gmail.com", firstname: "bryant", lastname: "patton", phone: "5555555", address: "555 blvd"},
        {username: "oluwatimileyin", password: bcrypt.hashSync("password", 10), email: "oojo@gmail.com", firstname: "oluwatimileyin", lastname: "ojo", phone: "6666666", address: "666 city"},
        {username: "philip", password: bcrypt.hashSync("password", 10), email: "pjohnsong@gmail.com", firstname: "philip", lastname: "johnson", phone: "7777777", address: "777 state"},
        {username: "scott", password: bcrypt.hashSync("password", 10), email: "svojik@gmail.com", firstname: "scott", lastname: "vojik", phone: "8888888", address: "888 cross street"},
        {username: "sorin", password: bcrypt.hashSync("password", 10), email: "schris@gmail.com", firstname: "sorin", lastname: "chris", phone: "9999999", address: "999 alley way"},
        {username: "chariton", password: bcrypt.hashSync("password", 10), email: "cshumway@gmail.com", firstname: "chariton", lastname: "shumway", phone: "1234567", address: "123 residence"},
      ]);
    });
};