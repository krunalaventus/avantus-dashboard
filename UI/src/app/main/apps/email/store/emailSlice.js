import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import { getUserData } from './userSlice';

export const getemail = createAsyncThunk('emailApp/email/getEmail', async (routeParams, { getState }) => {
	routeParams = routeParams || getState().emailApp.email.routeParams;
	const response = await axios.get(`${process.env.REACT_APP_API_URL}email`);
	const data = await response.data.data;

	return { data, routeParams };
});

export const addEmail = createAsyncThunk('emailApp/email/addEmail', async (email, { dispatch, getState }) => {
	email.id = null;
	const response = await axios.post(`${process.env.REACT_APP_API_URL}email`, email);
	const data = await response.data;
	dispatch(getemail());
	return data;
});

export const updateEmail = createAsyncThunk('emailApp/email/updateEmail', async (email, { dispatch, getState }) => {
	const response = await axios.put(`${process.env.REACT_APP_API_URL}email/${email.id}`, email);
	const data = await response.data;
	dispatch(getemail());
	return data;
});

export const removeEmail = createAsyncThunk('emailApp/email/removeEmail', async (emailId, { dispatch, getState }) => {
	const response = await axios.delete(`${process.env.REACT_APP_API_URL}email/${emailId}`);
	const data = await response.data;
	dispatch(getemail());
	return data;
});

export const removeemail = createAsyncThunk('emailApp/email/removeemail', async (emailIds, { dispatch, getState }) => {
	const response = await axios.post('/api/email-app/remove-email', { emailIds });
	const data = await response.data;
	dispatch(getemail());
	return data;
});

export const toggleStarredEmail = createAsyncThunk(
	'emailApp/email/toggleStarredEmail',
	async (emailId, { dispatch, getState }) => {
		const response = await axios.post('/api/email-app/toggle-starred-email', { emailId });
		const data = await response.data;

		dispatch(getUserData());

		dispatch(getemail());

		return data;
	}
);

export const toggleStarredemail = createAsyncThunk(
	'emailApp/email/toggleStarredemail',
	async (emailIds, { dispatch, getState }) => {
		const response = await axios.post('/api/email-app/toggle-starred-email', { emailIds });
		const data = await response.data;

		dispatch(getUserData());

		dispatch(getemail());

		return data;
	}
);

export const setemailStarred = createAsyncThunk(
	'emailApp/email/setemailStarred',
	async (emailIds, { dispatch, getState }) => {
		const response = await axios.post('/api/email-app/set-email-starred', { emailIds });
		const data = await response.data;

		dispatch(getUserData());

		dispatch(getemail());

		return data;
	}
);

export const setemailUnstarred = createAsyncThunk(
	'emailApp/email/setemailUnstarred',
	async (emailIds, { dispatch, getState }) => {
		const response = await axios.post('/api/email-app/set-email-unstarred', { emailIds });
		const data = await response.data;

		dispatch(getUserData());

		dispatch(getemail());

		return data;
	}
);

export const deleteThis = createAsyncThunk('emailApp/email/deleteThis', async (id, { dispatch, getState }) => {
	// eslint-disable-next-line no-restricted-globals
	const d = confirm('Do You want to delete this entry?');
	if (d === true) {
		dispatch(removeEmail(id));
	}
});

const emailAdapter = createEntityAdapter({});

export const { selectAll: selectemail, selectById: selectemailById } = emailAdapter.getSelectors(
	state => state.emailApp.email
);

const emailSlice = createSlice({
	name: 'emailApp/email',
	initialState: emailAdapter.getInitialState({
		searchText: '',
		routeParams: {},
		emailDialog: {
			type: 'new',
			props: {
				open: false
			},
			data: null
		}
	}),
	reducers: {
		setemailSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
		openNewEmailDialog: (state, action) => {
			state.emailDialog = {
				type: 'new',
				props: {
					open: true
				},
				data: null
			};
		},
		closeNewEmailDialog: (state, action) => {
			state.emailDialog = {
				type: 'new',
				props: {
					open: false
				},
				data: null
			};
		},
		openEditEmailDialog: (state, action) => {
			state.emailDialog = {
				type: 'edit',
				props: {
					open: true
				},
				data: action.payload
			};
		},
		closeEditEmailDialog: (state, action) => {
			state.emailDialog = {
				type: 'edit',
				props: {
					open: false
				},
				data: null
			};
		}
	},
	extraReducers: {
		[updateEmail.fulfilled]: emailAdapter.upsertOne,
		[addEmail.fulfilled]: emailAdapter.addOne,
		[getemail.fulfilled]: (state, action) => {
			const { data, routeParams } = action.payload;
			emailAdapter.setAll(state, data);
			state.routeParams = routeParams;
			state.searchText = '';
		}
	}
});

export const {
	setemailSearchText,
	openNewEmailDialog,
	closeNewEmailDialog,
	openEditEmailDialog,
	closeEditEmailDialog
} = emailSlice.actions;

export default emailSlice.reducer;
