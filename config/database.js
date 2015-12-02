var mongoose = require('mongoose');

global.db = mongoose.connect('mongodb://localhost/manage-shipment');

module.exports = db;
