var dbm = require('db-migrate'),
    fs = require('fs'),
    path = require('path');

exports.up = function(db, callback) {
  db.runSql(fs.readFileSync(path.join(__dirname, '20130330003817-songs-up.sql'), 'utf8'), callback);
};

exports.down = function(db, callback) {
  db.dropTable('songs', callback);
};
