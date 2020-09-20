import React from 'react';
import { Redirect } from 'react-router-dom';

const EmailAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/email/:id',
			component: React.lazy(() => import('./EmailApp'))
		},
		{
			path: '/apps/email',
			component: () => <Redirect to="/apps/email/all" />
		}
	]
};

export default EmailAppConfig;
