import { Router } from 'express';
const router = Router();

import { createProject, getProjects, getOneProject, deletePoject, updateProject} from '../controllers/projects.controller';


// /api/projects
router.post('/', createProject);
router.get('/', getProjects);
router.get('/:id', getOneProject);
router.delete('/:id', deletePoject);
router.put('/:id', updateProject);

export default router;