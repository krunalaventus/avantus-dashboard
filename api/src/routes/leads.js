import { Router } from 'express';
const LeadsRoutes = Router();
import { checkToken, checkSecretToken } from '../utility/tokenValidation';
import { uploadPhoto } from '../utility/fileUpload';


import { getAllLeads, deleteLeads, getTotal, getGraphData, UnsubscribeLeads, allCampaigns, getAllLeadsLabel } from '../controllers/leads.controller';

LeadsRoutes.get('/getAllLeads/:id', checkToken, getAllLeads);
LeadsRoutes.get('/get/label/:campaignId/:label', checkToken, getAllLeadsLabel);
LeadsRoutes.get('/total/:id', checkToken, getTotal);
LeadsRoutes.get('/getGraphData/:id', checkToken, getGraphData);
LeadsRoutes.post('/delete',checkToken, deleteLeads);
LeadsRoutes.post('/unsubscribe',checkToken, uploadPhoto.array('myFile'), UnsubscribeLeads);
LeadsRoutes.get('/allCampaigns',checkToken, allCampaigns);

export default LeadsRoutes; 