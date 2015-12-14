var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var q = require('q');
var port = 8080;
var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/node-server-project';
var adminController = require('./server-assets/controllers/adminProfileCtrl.js');
var userController = require('./server-assets/controllers/userProfileCtrl.js');

var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;


mongoose.Promise = require('q').Promise;

var app = express();

app.use(passport.initialize());

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname+ '/public'));

//user related calls
app.get('/api/users', userController.getUserInfo);
app.post('/api/users', userController.addUser);
app.put('/api/users/:id', userController.updateUserInfo);

//Admin related calls
app.get('/api/admin', adminController.getAdminPage);
app.post('/api/admin', adminController.addAdminInstitution);
app.put('/api/admin/:id', adminController.updateAdminPage);
//Institution Search
app.get('/api/institution', insitutionController.getInstitutions);


app.listen(port, function() {
	console.log("Listening on port: " + port);
});

mongoose.connect(mongoUri);
mongoose.connection.once('connected', function() {
	console.log("db connected");
});