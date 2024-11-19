import { Request, Response } from 'express';
import { studentServices } from './student.service';
import  studentValidationSchema  from './student.validation';
import { Student } from './student.interface';
const createStudent = async (req: Request, res: Response) => {
  try { 
    const student = req.body.student;
    const zodParsedData = studentValidationSchema.parse(student)
    // const { error,value} = studentValidationSchema.validate(student)
    const result = await studentServices.crateStudentIntoDB(zodParsedData as Student);

    // if(error){
    //   res.status(500).json({
    //     success:false,
    //     message:"something went wrong",
    //     error
    //   })
    // }
    res.status(200).json({
      success: true,
      message: 'Successfully created student',
      data:result,
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

export const studentControllers = {
  createStudent,
  getAllStudents,
  getASingleStudent,
};
