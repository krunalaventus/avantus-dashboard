import React from 'react';
import { Redirect } from 'react-router';

const AnalyticsDashboardAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/dashboards/analytics/:id',
			component: React.lazy(() => import('./AnalyticsDashboardApp'))
		},
		{
			path: '/apps/dashboards/analytics',
			component: () => <Redirect to="/apps/dashboards/analytics/all" />
		}
	]
};

export default AnalyticsDashboardAppConfig;
