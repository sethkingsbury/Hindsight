import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import adminService from './adminService';

const initialState = {
	isError: false,
	isSuccess: false,
	message: '',
};

// Create team
export const createTeam = createAsyncThunk(
	'admin/team',
	async (team, thunkAPI) => {
		try {
			return await adminService.createTeam(team);
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

export const adminSlice = createSlice({
	name: 'adminSlice',
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

export const { reset } = adminSlice.actions;
export default adminSlice.reducer;
