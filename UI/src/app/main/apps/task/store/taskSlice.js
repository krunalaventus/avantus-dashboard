import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { getUserData } from './userSlice';

export const gettask = createAsyncThunk('taskApp/task/getTask', async (routeParams, { getState }) => {
	routeParams = routeParams || getState().taskApp.task.routeParams;
	const response = await axios.get(`${process.env.REACT_APP_API_URL}task`);
	const data = await response.data.data;

	return { data, routeParams };
});

export const addTask = createAsyncThunk('taskApp/task/addTask', async (task, { dispatch, getState }) => {
	task.id = null;
	const response = await axios.post(`${process.env.REACT_APP_API_URL}task`, task);
	const data = await response.data;
	dispatch(gettask());
	return data;
});

export const updateTask = createAsyncThunk('taskApp/task/updateTask', async (task, { dispatch, getState }) => {
	const response = await axios.put(`${process.env.REACT_APP_API_URL}task/${task.id}`, task);
	const data = await response.data;
	dispatch(gettask());
	return data;
});

export const removeTask = createAsyncThunk('taskApp/task/removeTask', async (taskId, { dispatch, getState }) => {
	const response = await axios.delete(`${process.env.REACT_APP_API_URL}task/${taskId}`);
	const data = await response.data;
	dispatch(gettask());
	return data;
});

export const getUsers = createAsyncThunk('taskApp/task/getUser', async (routeParams, { getState }) => {
	routeParams = routeParams || getState().taskApp.task.routeParams;
	const response = await axios.get(`${process.env.REACT_APP_API_URL}user`);
	const data = await response.data.data;

	return { data, routeParams };
});

export const removetask = createAsyncThunk('taskApp/task/removetask', async (taskIds, { dispatch, getState }) => {
	const response = await axios.post('/api/task-app/remove-task', { taskIds });
	const data = await response.data;
	dispatch(gettask());
	return data;
});

export const toggleStarredTask = createAsyncThunk(
	'taskApp/task/toggleStarredTask',
	async (taskId, { dispatch, getState }) => {
		const response = await axios.get(`${process.env.REACT_APP_API_URL}task/completion-flag/${taskId}`);
		const data = await response.data;

		dispatch(getUserData());

		dispatch(gettask());

		return data;
	}
);

export const toggleStarredtask = createAsyncThunk(
	'taskApp/task/toggleStarredtask',
	async (taskIds, { dispatch, getState }) => {
		const response = await axios.post('/api/task-app/toggle-starred-task', { taskIds });
		const data = await response.data;

		dispatch(getUserData());

		dispatch(gettask());

		return data;
	}
);

export const settaskStarred = createAsyncThunk(
	'taskApp/task/settaskStarred',
	async (taskIds, { dispatch, getState }) => {
		const response = await axios.post('/api/task-app/set-task-starred', { taskIds });
		const data = await response.data;

		dispatch(getUserData());

		dispatch(gettask());

		return data;
	}
);

export const settaskUnstarred = createAsyncThunk(
	'taskApp/task/settaskUnstarred',
	async (taskIds, { dispatch, getState }) => {
		const response = await axios.post('/api/task-app/set-task-unstarred', { taskIds });
		const data = await response.data;

		dispatch(getUserData());

		dispatch(gettask());

		return data;
	}
);

export const deleteThis = createAsyncThunk('taskApp/task/deleteThis', async (id, { dispatch, getState }) => {
	// eslint-disable-next-line no-restricted-globals
	const d = confirm('Do You want to delete this entry?');
	if (d === true) {
		dispatch(removeTask(id));
	}
});

const taskAdapter = createEntityAdapter({});

export const { selectAll: selecttask, selectById: selecttaskById } = taskAdapter.getSelectors(
	state => state.taskApp.task
);

const taskSlice = createSlice({
	name: 'taskApp/task',
	initialState: taskAdapter.getInitialState({
		searchText: '',
		routeParams: {},
		taskDialog: {
			type: 'new',
			props: {
				open: false
			},
			data: null
		}
	}),
	reducers: {
		settaskSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
		openNewTaskDialog: (state, action) => {
			state.taskDialog = {
				type: 'new',
				props: {
					open: true
				},
				data: null
			};
		},
		closeNewTaskDialog: (state, action) => {
			state.taskDialog = {
				type: 'new',
				props: {
					open: false
				},
				data: null
			};
		},
		openEditTaskDialog: (state, action) => {
			state.taskDialog = {
				type: 'edit',
				props: {
					open: true
				},
				data: action.payload
			};
		},
		closeEditTaskDialog: (state, action) => {
			state.taskDialog = {
				type: 'edit',
				props: {
					open: false
				},
				data: null
			};
		}
	},
	extraReducers: {
		[updateTask.fulfilled]: taskAdapter.upsertOne,
		[addTask.fulfilled]: taskAdapter.addOne,
		[gettask.fulfilled]: (state, action) => {
			const { data, routeParams } = action.payload;
			taskAdapter.setAll(state, data);
			state.routeParams = routeParams;
			state.searchText = '';
		}
	}
});

export const {
	settaskSearchText,
	openNewTaskDialog,
	closeNewTaskDialog,
	openEditTaskDialog,
	closeEditTaskDialog
} = taskSlice.actions;

export default taskSlice.reducer;
