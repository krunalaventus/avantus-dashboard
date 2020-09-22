import { Router } from 'express';
const TaskRoutes = Router();
import { checkToken, checkSecretToken } from '../utility/tokenValidation';


import {getTask, createTask, updateTask, deleteTask, getTaskByCustomers, getAllTasks, setCompletionFlag } from '../controllers/tasks.controller';

TaskRoutes.get('/', checkToken, getAllTasks);
TaskRoutes.get('/:limit/:offset/:customer_id', getTaskByCustomers);
TaskRoutes.get('/:id', getTask);
TaskRoutes.post('/', createTask);
TaskRoutes.put('/:id', updateTask);
TaskRoutes.get('/completion-flag/:id', setCompletionFlag);
TaskRoutes.delete('/:id', deleteTask);

export default TaskRoutes;