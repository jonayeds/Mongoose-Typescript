import { TStudent } from './student.interface';
import { Student } from './student.model';

const crateStudentIntoDB = async (studentData: TStudent) => {
  // const student  = new Student(studentData)
  
  if(await Student.isUserExist(studentData.id)){
    throw new Error("Student Already exist by static")
  }
  
  const result  = await Student.create(studentData)
  // if(await student.isUserExist(studentData.id)){
  //   throw new Error("Student already Exists")
  // }
  // const result = await student.save();

  return result;


};
const getAllStudents = async () => {
  const result = await Student.find();
  return result;
};
const getASingleStudent = async (id: string) => {
  const result = await Student.findOne({id});
  return result;
};
const deleteStudentFromDB = async(studentId:string)=>{
  const result = await Student.updateOne({id:studentId},{isDeleted:true})
  return result
}

export const studentServices = {
  crateStudentIntoDB,
  getAllStudents,
  getASingleStudent,
  deleteStudentFromDB,
};
