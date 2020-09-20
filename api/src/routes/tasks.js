import { Router } from 'express';
const TaskRoutes = Router();
import { checkToken, checkSecretToken } from '../utility/tokenValidation';


import {getTask, createTask, updateTask, deleteTask, getTaskByCustomers, getAllTasks } from '../controllers/tasks.controller';

TaskRoutes.get('/', getAllTasks);
TaskRoutes.get('/:limit/:offset/:customer_id', getTaskByCustomers);
TaskRoutes.get('/:id', getTask);
TaskRoutes.post('/', createTask);
TaskRoutes.put('/:id', updateTask);
TaskRoutes.delete('/:id', deleteTask);

export default TaskRoutes;