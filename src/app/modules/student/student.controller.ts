import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';
import { response } from '../../utils/sendResponse';

const getAllStudents = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const result = await studentServices.getAllStudents();
    response(res,{success:true,message:"Successfully fetched all student data",data:result,statusCode:200} )
  } catch (err) {
    next(err)
  }
};
const getASingleStudent = async (req: Request, res: Response, next:NextFunction)  => {
  try {
    const id = req.params.studentId;
    const result = await studentServices.getASingleStudent(id);
    response(res,{success:true,message:"Successfully fetched single student data",data:result,statusCode:200} )
  } catch (err) {
    next(err)
  }
};
const deleteAStudent = async(req:Request,res:Response, next:NextFunction)=>{
  try {
    const studentId = req.params.studentId
    const data = req.body
    const result  = await studentServices.deleteStudentFromDB(studentId, data)
    response(res,{success:true,message:"Successfully deleted student from database",data:result,statusCode:200} )
  } catch (error) {
    next(error)
  }
}

export const studentControllers = {
  getAllStudents,
  getASingleStudent,
  deleteAStudent
};
