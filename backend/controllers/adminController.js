const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');

// @desc   Register a new user
// @route  /api/users
// @access Public
const createAdmin = asyncHandler(async (req, res) => {
	const adminExists = await User.findOne({ email: 'admin' });

	if (adminExists) {
		return;
	}

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash('admin', salt);

	const admin = await User.create({
		name: 'admin',
		email: 'admin',
		password: hashedPassword,
		isAdmin: true,
	});

	console.log('Admin Created');
});

module.exports = {
	createAdmin,
};
