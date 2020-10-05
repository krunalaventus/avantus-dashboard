import React from 'react';
import { Redirect } from 'react-router-dom';

const UnsubscribeListAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/unsubscribeList/:id',
			component: React.lazy(() => import('./UnsubscribeListApp'))
		},
		{
			path: '/apps/unsubscribeList',
			component: () => <Redirect to="/apps/unsubscribeList/all" />
		}
	]
};

export default UnsubscribeListAppConfig;
