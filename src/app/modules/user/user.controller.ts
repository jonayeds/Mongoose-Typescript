/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
    try { 
      const {student:studentData, password} = req.body;
      // const zodParsedData = studentValidationSchema.parse(studentData)
      // const { error,value} = studentValidationSchema.validate(student)
      const result = await UserServices.crateStudentIntoDB(password, studentData);
      res.status(200).json({
        success: true,
        message: 'Successfully created student',
        data:result,
      });
    } catch (err:any) {
      res.status(500).json({
        success:false,
        message:err.message || "something went wrong",
        error:err
      })
    } 
  };


  export const UserControllers = {
    createStudent
  }