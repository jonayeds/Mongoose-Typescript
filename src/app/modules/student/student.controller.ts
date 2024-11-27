import { Request, Response } from 'express';
import { studentServices } from './student.service';

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudents();
    res.status(200).json({
      success: true,
      message: 'Successfully fetched all student data',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success:false,
      message:"something went wrong",
      error:err
    })
  }
};
const getASingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.studentId;
    const result = await studentServices.getASingleStudent(id);
    res.status(200).json({
      success: true,
      message: 'Successfully fetched the data',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success:false,
      message:"something went wrong",
      error:err
    })
  }
};
const deleteAStudent = async(req:Request,res:Response)=>{
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
    res.status(200).json({
      success:false,
      message:"something went wrong while deleting student",
      error
    })
  }
}

export const studentControllers = {
  getAllStudents,
  getASingleStudent,
  deleteAStudent
};
