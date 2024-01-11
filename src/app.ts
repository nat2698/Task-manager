import express,{Express, request} from 'express'
import projectsRoutes from './routes/projects.routes'
import tasksRoutes from './routes/tasks.routes'

const app:Express = express();

// middlewares
app.use(express.json());
request.body;
app.use(projectsRoutes);
app.use(tasksRoutes);


export default app;