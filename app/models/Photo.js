module.exports = function(app) {
  var Schema = require('mongoose').Schema;

  var PhotoSchema = Schema({
    title: String,
    url: String,
    created_at: {
      type: Date,
      default: Date.now
    }
  });

  return db.model('photo', PhotoSchema);
};
