import React from 'react';
import { Redirect } from 'react-router-dom';

const LeadsAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/leads/:id',
			component: React.lazy(() => import('./LeadsApp'))
		},
		{
			path: '/apps/leads',
			component: () => <Redirect to="/apps/leads/all" />
		}
	]
};

export default LeadsAppConfig;
