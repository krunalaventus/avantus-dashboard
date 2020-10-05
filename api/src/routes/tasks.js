import { Router } from 'express';
const TaskRoutes = Router();
import { checkToken, checkSecretToken } from '../utility/tokenValidation';


import {getTask, createTask, updateTask, deleteTask, getTaskByCustomers, getAllTasks, setCompletionFlag } from '../controllers/tasks.controller';

TaskRoutes.get('/', checkToken, getAllTasks);
TaskRoutes.get('/customer/:id', checkToken, getTaskByCustomers);
TaskRoutes.get('/:id', checkToken, getTask);
TaskRoutes.post('/', checkToken, createTask);
TaskRoutes.put('/:id', checkToken, updateTask);
TaskRoutes.get('/completion-flag/:id', checkToken, setCompletionFlag);
TaskRoutes.delete('/:id', checkToken, deleteTask);

export default TaskRoutes;