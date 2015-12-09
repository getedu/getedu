var mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
	institutionName: {type: String, required: true},
	city: {type:String, required: true},
	state: {type: String, required: true},
	type: {type:String, enum: ['4-year', '2-year', 'Bootcamp','Graduate']},
	studentCount: {type:Number},
	topSubj: {type: String, enum: ['History', 'Science', 'Math', 'Social Studies', 'Language', 'Music']},
	avgClassSize: {type: Number},
	studentTeachRatio: {type: String},
	genderRatio: {type: String},
	financialAid: {type: String, required: true, enum: ['Need-blind', 'Need-based']}
});

module.exports = mongoose.model('Admin', adminSchema);