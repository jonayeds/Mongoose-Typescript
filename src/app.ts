import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRouter } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.routes';
export const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// routes
app.use('/api/v1/students', studentRouter);
app.use("/api/v1/users", UserRoutes)


export default app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
