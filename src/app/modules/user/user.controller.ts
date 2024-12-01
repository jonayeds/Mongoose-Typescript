import { UserServices } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";


const createStudent =catchAsync(async (req, res) => {
      const {student:studentData, password} = req.body;
      // const zodParsedData = studentValidationSchema.parse(studentData)
      const result = await UserServices.crateStudentIntoDB(password, studentData);
      res.status(200).json({
        success: true,
        message: 'Successfully created student',
        data:result,
      });
  });


  export const UserControllers = {
    createStudent
  }