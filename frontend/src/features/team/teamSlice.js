import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import teamService from './teamService';

const initialState = {
	isError: false,
	isSuccess: false,
	message: '',
};

// Create team
export const createTeam = createAsyncThunk(
	'teams/create',
	async (team, thunkAPI) => {
		try {
			return await teamService.createTeam(team);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const teamSlice = createSlice({
	name: 'teamSlice',
	initialState,
	reducers: {
		reset: (state) => {
			state.isError = false;
			state.isSuccess = false;
			state.message = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createTeam.fulfilled, (state) => {
				state.isSuccess = true;
			})
			.addCase(createTeam.rejected, (state, action) => {
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = teamSlice.actions;
export default teamSlice.reducer;
