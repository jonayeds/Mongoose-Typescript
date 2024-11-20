import express from 'express';
import { studentControllers } from './student.controller';
export const studentRouter = express.Router();

// will call the controllers
studentRouter.post('/create-student', studentControllers.createStudent);
studentRouter.get('/students', studentControllers.getAllStudents);
studentRouter.get('/student/:studentId', studentControllers.getASingleStudent);
studentRouter.delete("/:studentId",studentControllers.deleteAStudent)