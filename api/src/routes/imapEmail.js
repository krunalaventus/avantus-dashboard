import { Router } from 'express';
import { getAllImapEmails, getEmailDetail } from '../controllers/imapEmails.controller';
const ImapEmailRoutes = Router();
import { checkToken, checkSecretToken } from '../utility/tokenValidation';

ImapEmailRoutes.get('/',checkToken, getAllImapEmails);
ImapEmailRoutes.get('/:id', getEmailDetail);

export default ImapEmailRoutes;