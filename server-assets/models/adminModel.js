var mongoose = require('mongoose');

var institutionProfileSchema = new mongoose.Schema({
	name: {type: String, required: true},
	city: {type:String, required: true},
	state: {type: String, required: true},
	type: {type:String, enum: ['4-Year', '2-Year', 'Bootcamp','Graduate'], required: true},
	studentCount: {type:Number, required: true},
	topSubj: {type: String, enum: ['History', 'Science', 'Math', 'Social Sciences', 'Language', 'Music'], required: true},
	avgClassSize: {type: Number, required: true},
	studentTeachRatio: {type: String, required: true},
	genderRatio: {type: String, required: true},
	financialAid: {type: String, required: true, enum: ['Need-blind', 'Need-based', 'No Financial Aid']}
});

module.exports = mongoose.model('InstitutionProfile', institutionProfileSchema);