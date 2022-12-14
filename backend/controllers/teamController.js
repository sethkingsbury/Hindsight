const asyncHandler = require('express-async-handler');

const Team = require('../models/teamModel');

// @desc   Create a new team
// @route  /api/team
// @access Private
const createTeam = asyncHandler(async (req, res) => {
	const { name } = req.body;

	// Validation
	if (!name) {
		res.status(400);
		throw new Error('Please include all fields');
	}

	// Find if team already exists
	const teamExists = await Team.findOne({ name });

	if (teamExists) {
		res.status(400);
		throw new Error('Team already exists');
	}

	// Create user
	const team = await Team.create({
		name,
	});

	if (team) {
		res.status(201).json({
			name: team.name,
		});
	} else {
		res.status(400);
		throw new Error('Invalid team data');
	}
});

// @desc   Gets all the teams
// @route  /api/teams
// @access Public
const getTeams = asyncHandler(async (req, res) => {
	const teams = await Team.find();

	const teamNames = [];
	for (let i = 0; i < teams.length; i++) {
		teamNames.push(teams[i].name);
	}

	if (teams) {
		res.status(201).json({
			teams: teamNames,
		});
	} else {
		res.status(400);
		throw new Error("Couldn't find teams");
	}
});

module.exports = {
	createTeam,
	getTeams,
};
