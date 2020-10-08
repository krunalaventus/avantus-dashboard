import { authRoles } from 'app/auth';
import store from 'app/store';
import { logoutUser } from 'app/auth/store/userSlice';
import { submitCustomerLogin } from 'app/auth/store/loginSlice';

const LoginAsAdminConfig = {
	auth: authRoles.ascustomer,
	routes: [
		{
			path: '/apps/adminlogin/all',
			component: () => {
				store.dispatch(submitCustomerLogin({ id: 1 }));
				return 'Logging out..';
			}
		}
	]
};

export default LoginAsAdminConfig;
