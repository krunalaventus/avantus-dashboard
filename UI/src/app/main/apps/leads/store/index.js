import { combineReducers } from '@reduxjs/toolkit';
import leads from './leadsSlice';
import user from './userSlice';

const reducer = combineReducers({
	leads,
	user
});

export default reducer;
