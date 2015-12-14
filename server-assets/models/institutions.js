var mongoose = require('mongoose');

var institutionSchema = new mongoose.Schema({
	name: {type: String},
	location: {type:String},
});

module.exports = mongoose.model('Institution', institutionSchema);