import { Router } from 'express';
const UserRoutes = Router();
import { checkToken } from '../utility/tokenValidation';

import { login,signup,adminLogin, getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/users.controller';

UserRoutes.get('/', getUsers);
UserRoutes.get('/:id', getUser);
UserRoutes.post('/', createUser);
UserRoutes.put('/:id', updateUser);
UserRoutes.delete('/:id', deleteUser);
UserRoutes.post('/signup', signup);
UserRoutes.post('/login', login);
UserRoutes.post('/adminLogin', adminLogin);



export default UserRoutes;