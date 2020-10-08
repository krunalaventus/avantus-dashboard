import { authRoles } from 'app/auth';
import store from 'app/store';
import { logoutUser } from 'app/auth/store/userSlice';
import { submitCustomerLogin } from 'app/auth/store/loginSlice';
import { Redirect } from 'react-router';
import React from 'react';

const RedirectToDashboardConfig = {
	auth: authRoles.ascustomer,
	routes: [
		{
			path: '/apps/redirectDashboard/:id',
			component: () => <Redirect to="/apps/dashboards/analytics/:id" />
		}
	]
};

export default RedirectToDashboardConfig;
