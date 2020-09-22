import { combineReducers } from '@reduxjs/toolkit';
import customerTask from './customerTaskSlice';
import user from './userSlice';

const reducer = combineReducers({
	customerTask,
	user
});

export default reducer;
