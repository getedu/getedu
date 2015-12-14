
var Institution = require('../models/institutions.js');

module.exports = {
	getInstitutions: function(req, res) {
		console.log(req.query.q);
		var regexp = new RegExp(req.query.q, 'i');
		Institution.find({name : { $regex : regexp}}).exec().then(function(results) {
			console.log(results);
			return res.json(results);
		}).catch(function(err) {
			return res.status(500).json(err);
		});
		// Institution.find().exec().then(function(results) {
		// 	console.log(results);
		// 	return res.json(results);
		// }).catch(function(err) {
		// 	return res.status(500).json(err);
		// })  Institution.where('institutionName').regex(/req.query.q/)
	}
};