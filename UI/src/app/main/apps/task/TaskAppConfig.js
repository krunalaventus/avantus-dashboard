import React from 'react';
import { Redirect } from 'react-router-dom';

const TaskAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/task/:id',
			component: React.lazy(() => import('./TaskApp'))
		},
		{
			path: '/apps/task',
			component: () => <Redirect to="/apps/task/all" />
		}
	]
};

export default TaskAppConfig;
