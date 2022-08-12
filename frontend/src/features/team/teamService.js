import axios from 'axios';

const API_URL = '/api/teams/';

const createTeam = async (userData) => {
	const res = await axios.post(API_URL, userData);

	return res.data;
};

const teamService = {
	createTeam,
};

export default teamService;
