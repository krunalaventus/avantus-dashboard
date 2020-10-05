import { Router } from 'express';
const LeadsRoutes = Router();
import { checkToken, checkSecretToken } from '../utility/tokenValidation';
import { uploadPhoto } from '../utility/fileUpload';


import { getAllLeads, deleteLeads, getTotal, getGraphData, UnsubscribeLeads } from '../controllers/leads.controller';

LeadsRoutes.get('/', checkToken, getAllLeads);
LeadsRoutes.get('/total', checkToken, getTotal);
LeadsRoutes.get('/getGraphData', checkToken, getGraphData);
LeadsRoutes.post('/delete',checkToken, deleteLeads);
LeadsRoutes.post('/unsubscribe',checkToken, uploadPhoto.array('myFile'), UnsubscribeLeads);

export default LeadsRoutes;