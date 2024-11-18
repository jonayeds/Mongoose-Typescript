import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
    const result = await studentServices.crateStudentIntoDB(student);
    res.status(200).json({
      success: true,
      message: 'Successfully created student',
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
const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudents();
    res.status(200).json({
      success: true,
      message: 'Successfully fetched all student data',
      data: result,
    });
  } catch (err) {
    console.log(err);
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
    console.log(err);
  }
};

export const studentControllers = {
  createStudent,
  getAllStudents,
  getASingleStudent,
};
