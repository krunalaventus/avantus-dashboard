import React from 'react';
import { Redirect } from 'react-router-dom';

const CustomerTaskAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/customerTask/:id',
			component: React.lazy(() => import('./CustomerTaskApp'))
		},
		{
			path: '/apps/customerTask',
			component: () => <Redirect to="/apps/customerTask/all" />
		}
	]
};

export default CustomerTaskAppConfig;
