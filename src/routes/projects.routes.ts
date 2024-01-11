import {Router} from 'express'
import { createProject, deleteproject, getProject, getProjectTasks, getProjects, updateProject } from '../controllers/projects.controller'
const router = Router()

router.get('/projects', getProjects)
router.post('/projects', createProject)
router.put('/projects/:id', updateProject)
router.delete('/projects/:id', deleteproject)
router.get('/projects/:id', getProject)

router.get('/projects/:id/tasks', getProjectTasks)


export default router

