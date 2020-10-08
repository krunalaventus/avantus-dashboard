/**
 * Authorization Roles
 */
const authRoles = {
	all: ['super user', 'customer', 'AsCustomer'],
	admin: ['super user'],
	customer: ['customer', 'AsCustomer'],
	ascustomer: ['AsCustomer'],
	onlyGuest: []
};

export default authRoles;
