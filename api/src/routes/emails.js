import { Router } from 'express';
const EmailRoutes = Router();
import { checkToken, checkSecretToken } from '../utility/tokenValidation';


import {getEmail, createEmail, updateEmail, deleteEmail, getEmailByUserNames, getAllEmails } from '../controllers/emails.controller';

EmailRoutes.get('/', getAllEmails);
EmailRoutes.get('/:limit/:offset/:customer_id', getEmailByUserNames);
EmailRoutes.get('/:id', getEmail);
EmailRoutes.post('/', createEmail);
EmailRoutes.put('/:id', updateEmail);
EmailRoutes.delete('/:id', deleteEmail);

export default EmailRoutes;