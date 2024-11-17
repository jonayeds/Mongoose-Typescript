import express from "express"
import { studentControllers } from "./student.controller"
export const studentRouter = express.Router()

// will call the controllers
studentRouter.post("/create-student", studentControllers.createStudent)

