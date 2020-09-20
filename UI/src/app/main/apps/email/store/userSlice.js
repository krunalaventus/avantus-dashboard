import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserData = createAsyncThunk('emailApp/user/getUserData', async () => {
	const response = await axios.get('/api/email-app/user');
	const data = await response.data;
	return data;
});

const userSlice = createSlice({
	name: 'emailApp/user',
	initialState: {},
	reducers: {},
	extraReducers: {
		[getUserData.fulfilled]: (state, action) => action.payload
	}
});

export default userSlice.reducer;
