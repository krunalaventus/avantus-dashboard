import { Router } from 'express';
import { getAllImapEmails, getAllImapEmailsLabel, getEmailDetail, loadEmail } from '../controllers/imapEmails.controller';
const ImapEmailRoutes = Router();
import { checkToken, checkSecretToken } from '../utility/tokenValidation';

ImapEmailRoutes.get('/',checkToken, getAllImapEmails);
ImapEmailRoutes.get('/get/all/label/:label',checkToken, getAllImapEmailsLabel);
ImapEmailRoutes.get('/loadEmails/all',checkToken, loadEmail);
ImapEmailRoutes.get('/:id', getEmailDetail);

export default ImapEmailRoutes;