import { Router } from 'express';
const router = Router();

import { createTask, getTasks, getOneTask, deleteTask, updateTask, getTaskByProject } from '../controllers/tasks.controller';

// /api/tasks
router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getOneTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

// /api/tasks/project/:project_id
router.get('/project/:project_id', getTaskByProject);

export default router;