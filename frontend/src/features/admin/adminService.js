import axios from 'axios';

const API_URL = '/api/admin/';

const createTeam = async (userData) => {
	const res = await axios.post(API_URL + 'team', userData);

	return res.data;
};

const adminService = {
	createTeam,
};

export default adminService;
