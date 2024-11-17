import { Student } from './student.interface';
import { StudentModel } from './student.model';

const crateStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
const getAllStudents = async () => {
  const result = await StudentModel.find();
  return result;
};
const getASingleStudent = async (id: string) => {
  const result = await StudentModel.findById(id);
  return result;
};

export const studentServices = {
  crateStudentIntoDB,
  getAllStudents,
  getASingleStudent,
};
