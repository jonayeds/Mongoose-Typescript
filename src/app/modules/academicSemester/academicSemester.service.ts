import { IAcademicSemester } from "./academicSemester.interface"
import { AcademicSemester } from "./academicSemester.model"

const createAcademicSemesterIntoDB = async(payLoad:IAcademicSemester)=>{
    const result = await AcademicSemester.create(payLoad)
    return result    
}

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB
}