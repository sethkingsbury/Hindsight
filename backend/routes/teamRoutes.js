const express = require('express');
const router = express.Router();
const { createTeam } = require('../controllers/teamController');

const { protect } = require('../middleware/authMiddleware');

router.post('/team', createTeam);

module.exports = router;
