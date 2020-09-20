import { combineReducers } from '@reduxjs/toolkit';
import task from './taskSlice';
import user from './userSlice';

const reducer = combineReducers({
	task,
	user
});

export default reducer;
