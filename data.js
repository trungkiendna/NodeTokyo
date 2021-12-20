const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

db = low(new FileSync('db.json'));  

db.defaults({ users: [] })
    .write();

module.exports = db;    