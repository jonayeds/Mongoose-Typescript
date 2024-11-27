import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';

const getAllStudents = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const result = await studentServices.getAllStudents();
    res.status(200).json({
      success: true,
      message: 'Successfully fetched all student data',
      data: result,
    });
  } catch (err) {
    next(err)
  }
};
const getASingleStudent = async (req: Request, res: Response, next:NextFunction)  => {
  try {
    const id = req.params.studentId;
    const result = await studentServices.getASingleStudent(id);
    res.status(200).json({
      success: true,
      message: 'Successfully fetched the data',
      data: result,
    });
  } catch (err) {
    next(err)
  }
};
const deleteAStudent = async(req:Request,res:Response, next:NextFunction)=>{
  try {
    const studentId = req.params.studentId
    const data = req.body
    const result  = await studentServices.deleteStudentFromDB(studentId, data)
    res.status(200).json({
      success:true,
      message:"Successfully deleted student from DB ",
      data: result
    })
  } catch (error) {
    next(error)
  }
}

export const studentControllers = {
  getAllStudents,
  getASingleStudent,
  deleteAStudent
};
