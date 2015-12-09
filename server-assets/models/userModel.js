var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: {type:String, required: true},
	password: {type: String, required: true},
	name: {type: String, required: true},
	birthday: {type: Date},
	gender: {type: String, enum: ['male', 'female']},
	favSubj: {type: String, enum: ['History', 'Science', 'Math', 'Social Studies', 'Language', 'Music']},
	state: {type: String}
});

module.exports = mongoose.model('User', userSchema);