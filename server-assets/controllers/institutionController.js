var Institution = require('../models/institutions.js');

module.exports = {
	getInstitutions: function(req, res) {
		Institution.find(req.query).exec().then(function(results) {
			return res.json(results);
		}).catch(function(err) {
			return res.status(500).json(err);
		});
	},

	// addAdminInstitution: function(req, res) {
	// 	var newAdmin = new Admin(req.body);
	// 	newAdmin.save().then(function() {
	// 		return res.send('Institution added!');
	// 	}).catch(function(err) {
	// 		return res.status(500).json(err);
	// 	});
	// },

	// updateAdminPage: function(req, res) {
	// 	Admin.findByIdAndUpdate(req.params.id, req.body, {new:true}).exec().then(function(result) {
	// 		return res.json(result);
	// 	}).catch(function(err) {
	// 		return res.status(500).json(err);
	// 	});
	// }
}