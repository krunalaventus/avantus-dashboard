import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserData = createAsyncThunk('customerTaskApp/user/getUserData', async () => {
	const response = await axios.get('/api/customerTask-app/user');
	const data = await response.data;
	return data;
});

const userSlice = createSlice({
	name: 'customerTaskApp/user',
	initialState: {},
	reducers: {},
	extraReducers: {
		[getUserData.fulfilled]: (state, action) => action.payload
	}
});

export default userSlice.reducer;
