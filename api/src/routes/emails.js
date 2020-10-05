import { Router } from 'express';
const EmailRoutes = Router();
import { checkToken, checkSecretToken } from '../utility/tokenValidation';


import {getEmail, createEmail, updateEmail, deleteEmail, getEmailByUserNames, getAllEmails } from '../controllers/emails.controller';

EmailRoutes.get('/',checkToken, getAllEmails);
EmailRoutes.get('/customer/:id',checkToken, getEmailByUserNames);
EmailRoutes.get('/:id',checkToken, getEmail);
EmailRoutes.post('/',checkToken, createEmail);
EmailRoutes.put('/:id',checkToken, updateEmail);
EmailRoutes.post('/delete',checkToken, deleteEmail);

export default EmailRoutes;