import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { getUserData } from './userSlice';

export const getleads = createAsyncThunk('leadsApp/leads/getLeads', async (routeParams, { getState }) => {
	routeParams = routeParams || getState().leadsApp.leads.routeParams;
	console.log('Selected Value is', getState().leadsApp.leads.selectedValue);
	const token = localStorage.getItem('token');
	const campaignId = getState().leadsApp.leads.selectedValue;
	const response = await axios.get(`${process.env.REACT_APP_API_URL}leads/getAllLeads/${routeParams.id}`, {
		headers: {
			Authorization: token
		}
	});
	const data = await response.data.data;
	return { data, routeParams };
});

export const removeLeads = createAsyncThunk(
	'contactsApp/contacts/removeLeads',
	async (contactIds, { dispatch, getState }) => {
		// eslint-disable-next-line no-restricted-globals
		const d = confirm('Do You want to delete this entry?');
		if (d === true) {
			const token = localStorage.getItem('token');
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}leads/delete`,
				{ contactIds },
				{
					headers: {
						Authorization: token
					}
				}
			);
			const data = await response.data;

			dispatch(getleads());

			return data;
		}
	}
);

const leadsAdapter = createEntityAdapter({});

export const { selectAll: selectleads, selectById: selectleadsById } = leadsAdapter.getSelectors(
	state => state.leadsApp.leads
);

const leadsSlice = createSlice({
	name: 'leadsApp/leads',
	initialState: leadsAdapter.getInitialState({
		searchText: '',
		routeParams: {},
		leadsDialog: {
			type: 'new',
			props: {
				open: false
			},
			data: null
		}
	}),
	reducers: {
		setleadsSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
		openNewLeadsDialog: (state, action) => {
			state.leadsDialog = {
				type: 'new',
				props: {
					open: true
				},
				data: null
			};
		},
		closeNewLeadsDialog: (state, action) => {
			state.leadsDialog = {
				type: 'new',
				props: {
					open: false
				},
				data: null
			};
		},
		openEditLeadsDialog: (state, action) => {
			state.leadsDialog = {
				type: 'edit',
				props: {
					open: true
				},
				data: action.payload
			};
		},
		closeEditLeadsDialog: (state, action) => {
			state.leadsDialog = {
				type: 'edit',
				props: {
					open: false
				},
				data: null
			};
		}
	},
	extraReducers: {
		[getleads.pending]: (state, action) => {
			state.status = 'loading';
		},
		[getleads.fulfilled]: (state, action) => {
			state.status = 'succeeded';
			const { data, routeParams } = action.payload;
			leadsAdapter.setAll(state, data);
			state.routeParams = routeParams;
			state.searchText = '';
		}
	}
});

export const {
	setleadsSearchText,
	openNewLeadsDialog,
	closeNewLeadsDialog,
	openEditLeadsDialog,
	closeEditLeadsDialog
} = leadsSlice.actions;

export default leadsSlice.reducer;
