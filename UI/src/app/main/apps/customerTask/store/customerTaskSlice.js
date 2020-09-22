import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { getUserData } from './userSlice';

export const getcustomerTask = createAsyncThunk(
	'customerTaskApp/customerTask/getCustomerTask',
	async (routeParams, { getState }) => {
		routeParams = routeParams || getState().customerTaskApp.customerTask.routeParams;
		const response = await axios.get(`${process.env.REACT_APP_API_URL}task`);
		const data = await response.data.data;

		return { data, routeParams };
	}
);

const customerTaskAdapter = createEntityAdapter({});

export const { selectAll: selectcustomerTask, selectById: selectcustomerTaskById } = customerTaskAdapter.getSelectors(
	state => state.customerTaskApp.customerTask
);

const customerTaskSlice = createSlice({
	name: 'customerTaskApp/customerTask',
	initialState: customerTaskAdapter.getInitialState({
		searchText: '',
		routeParams: {},
		customerTaskDialog: {
			type: 'new',
			props: {
				open: false
			},
			data: null
		}
	}),
	reducers: {
		setcustomerTaskSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
		openNewCustomerTaskDialog: (state, action) => {
			state.customerTaskDialog = {
				type: 'new',
				props: {
					open: true
				},
				data: null
			};
		},
		closeNewCustomerTaskDialog: (state, action) => {
			state.customerTaskDialog = {
				type: 'new',
				props: {
					open: false
				},
				data: null
			};
		},
		openEditCustomerTaskDialog: (state, action) => {
			state.customerTaskDialog = {
				type: 'edit',
				props: {
					open: true
				},
				data: action.payload
			};
		},
		closeEditCustomerTaskDialog: (state, action) => {
			state.customerTaskDialog = {
				type: 'edit',
				props: {
					open: false
				},
				data: null
			};
		}
	},
	extraReducers: {
		[getcustomerTask.fulfilled]: (state, action) => {
			const { data, routeParams } = action.payload;
			customerTaskAdapter.setAll(state, data);
			state.routeParams = routeParams;
			state.searchText = '';
		}
	}
});

export const {
	setcustomerTaskSearchText,
	openNewCustomerTaskDialog,
	closeNewCustomerTaskDialog,
	openEditCustomerTaskDialog,
	closeEditCustomerTaskDialog
} = customerTaskSlice.actions;

export default customerTaskSlice.reducer;
