import { Router } from 'express';
const UserRoutes = Router();
import { checkToken } from '../utility/tokenValidation';

import { login,signup,adminLogin, getUsers, getUser, createUser, updateUser, deleteUser, searchUsers, loginCustomer } from '../controllers/users.controller';

UserRoutes.get('/', checkToken, getUsers);
UserRoutes.get('/search', checkToken, searchUsers);
UserRoutes.get('/:id', checkToken, getUser);
UserRoutes.post('/', checkToken, createUser);
UserRoutes.put('/:id', checkToken, updateUser);
UserRoutes.delete('/:id', checkToken, deleteUser);
UserRoutes.post('/signup', signup);
UserRoutes.post('/login', login);
UserRoutes.post('/loginCustomer', loginCustomer);
UserRoutes.post('/adminLogin', adminLogin);



export default UserRoutes;