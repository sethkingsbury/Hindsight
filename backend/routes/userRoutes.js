const express = require('express');
const router = express.Router();
const {
	registerUser,
	loginUser,
	getMe,
} = require('../controllers/userController');

const { createAdmin } = require('../controllers/adminController');

const { protect } = require('../middleware/authMiddleware');

router.post('/admin', createAdmin);
router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

module.exports = router;
