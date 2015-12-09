var User = require('../models/userModel.js');

module.exports = {
	getUserInfo: function(req, res) {
		User.find(req.query).exec().then(function(user) {
			return res.json(user);
		}).catch(function(err) {
			return res.status(500).json(err);
		});
	},

	addUser: function(req, res) {
		var newUser = new User(req.body);
		newUser.save().then(function() {
			console.log('User added!');
			return res.status(201).end();
		}).catch(function(err) {
			console.log(err);
			return res.status(500).json(err);
		});
	},

	updateUserInfo: function(req, res) {
		User.findByIdAndUpdate(req.params.id, req.body, {new:true}).exec().then(function(result) {
			return res.json(result);
		}).catch(function(err) {
			return res.status(500).json(err);
		});
	}
}