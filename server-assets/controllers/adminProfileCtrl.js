var Admin = require('../models/adminModel.js');

module.exports = {
	getAdminPage: function(req, res) {
		Admin.find(req.query).exec().then(function(admin) {
			return res.json(admin);
		}).catch(function(err) {
			return res.status(500).json(err);
		});
	},

	addAdminInstitution: function(req, res) {
		var newAdmin = new Admin(req.body);
		newAdmin.save().then(function() {
			return res.send('Institution added!');
		}).catch(function(err) {
			return res.status(500).json(err);
		});
	},

	updateAdminPage: function(req, res) {
		Admin.findByIdAndUpdate(req.params.id, req.body, {new:true}).exec().then(function(result) {
			return res.json(result);
		}).catch(function(err) {
			return res.status(500).json(err);
		});
	}
}