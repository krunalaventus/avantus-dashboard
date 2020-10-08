import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showMessage } from 'app/store/fuse/messageSlice';

export const getMail = createAsyncThunk('mailApp/mail/getMail', async params => {
	const token = localStorage.getItem('token');
	const response = await fetch(`${process.env.REACT_APP_API_URL}imapEmails/${params.mailId}`, {
		headers: {
			Authorization: token
		}
	});
	const res = await response.json();
	return res.data;
});

export const updateMail = createAsyncThunk('mailApp/mail/updateMail', async (_data, { getState, dispatch }) => {
	const { id } = getState().mailApp.mail;

	const response = await axios.post('/api/mail-app/update-mail', { id, ..._data });
	const data = await response;

	dispatch(showMessage({ message: 'Mail Saved' }));
	console.log(data);
	return data;
});

const mailSlice = createSlice({
	name: 'mailApp/mail',
	initialState: null,
	reducers: {},
	extraReducers: {
		[getMail.fulfilled]: (state, action) => action.payload,
		[updateMail.fulfilled]: (state, action) => ({
			...state,
			...action.payload
		})
	}
});

export default mailSlice.reducer;
