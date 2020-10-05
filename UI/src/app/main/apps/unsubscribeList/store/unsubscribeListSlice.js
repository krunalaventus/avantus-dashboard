import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { getUserData } from './userSlice';

export const getunsubscribeList = createAsyncThunk(
	'unsubscribeListApp/unsubscribeList/getUnsubscribeList',
	async (routeParams, { getState }) => {
		routeParams = routeParams || getState().unsubscribeListApp.unsubscribeList.routeParams;
		const token = localStorage.getItem('token');
		const response = await axios.get(`${process.env.REACT_APP_API_URL}leads`, {
			headers: {
				Authorization: token
			}
		});
		const data = await response.data.data;
		return { data, routeParams };
	}
);

export const removeUnsubscribeList = createAsyncThunk(
	'contactsApp/contacts/removeUnsubscribeList',
	async (contactIds, { dispatch, getState }) => {
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

		dispatch(getunsubscribeList());

		return data;
	}
);

const unsubscribeListAdapter = createEntityAdapter({});

export const {
	selectAll: selectunsubscribeList,
	selectById: selectunsubscribeListById
} = unsubscribeListAdapter.getSelectors(state => state.unsubscribeListApp.unsubscribeList);

const unsubscribeListSlice = createSlice({
	name: 'unsubscribeListApp/unsubscribeList',
	initialState: unsubscribeListAdapter.getInitialState({
		searchText: '',
		routeParams: {},
		unsubscribeListDialog: {
			type: 'new',
			props: {
				open: false
			},
			data: null
		}
	}),
	reducers: {
		setunsubscribeListSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
		openNewUnsubscribeListDialog: (state, action) => {
			state.unsubscribeListDialog = {
				type: 'new',
				props: {
					open: true
				},
				data: null
			};
		},
		closeNewUnsubscribeListDialog: (state, action) => {
			state.unsubscribeListDialog = {
				type: 'new',
				props: {
					open: false
				},
				data: null
			};
		},
		openEditUnsubscribeListDialog: (state, action) => {
			state.unsubscribeListDialog = {
				type: 'edit',
				props: {
					open: true
				},
				data: action.payload
			};
		},
		closeEditUnsubscribeListDialog: (state, action) => {
			state.unsubscribeListDialog = {
				type: 'edit',
				props: {
					open: false
				},
				data: null
			};
		}
	},
	extraReducers: {
		[getunsubscribeList.fulfilled]: (state, action) => {
			const { data, routeParams } = action.payload;
			unsubscribeListAdapter.setAll(state, data);
			state.routeParams = routeParams;
			state.searchText = '';
		}
	}
});

export const {
	setunsubscribeListSearchText,
	openNewUnsubscribeListDialog,
	closeNewUnsubscribeListDialog,
	openEditUnsubscribeListDialog,
	closeEditUnsubscribeListDialog
} = unsubscribeListSlice.actions;

export default unsubscribeListSlice.reducer;
