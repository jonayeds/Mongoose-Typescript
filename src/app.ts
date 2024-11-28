/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application,  Request, Response } from 'express';
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


export default app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use((err:any,req:Request, res:Response) => {
  const statusCode =500
  const message = err.message || "Something went wrong"
  res.status(statusCode).json({
    success:false,
    message,
    error: err
  }) 
})
