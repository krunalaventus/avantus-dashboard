import { combineReducers } from '@reduxjs/toolkit';
import email from './emailSlice';
import user from './userSlice';

const reducer = combineReducers({
	email,
	user
});

export default reducer;
