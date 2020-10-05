import { combineReducers } from '@reduxjs/toolkit';
import unsubscribeList from './unsubscribeListSlice';
import user from './userSlice';

const reducer = combineReducers({
	unsubscribeList,
	user
});

export default reducer;
