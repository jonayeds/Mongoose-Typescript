import { academicSemesterNameCodeValidation } from "./academicSemester.constant"
import { IAcademicSemester } from "./academicSemester.interface"
import { AcademicSemester } from "./academicSemester.model"



const createAcademicSemesterIntoDB = async(payLoad:IAcademicSemester)=>{
    
    if(academicSemesterNameCodeValidation[payLoad.name] !== payLoad.code){
        throw new Error("Invalid semester code")
    }
    const result = await AcademicSemester.create(payLoad)
    return result    
}

const getAllAcademicSemesterFromDB = async()=>{
    const result = await AcademicSemester.find()
    return result
}

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemesterFromDB
}