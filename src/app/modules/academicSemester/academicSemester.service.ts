import { IAcademicSemester } from "./academicSemester.interface"
import { AcademicSemester } from "./academicSemester.model"

type TAcademicSemesterNameCodeValidation = {
    [key:string]:string
}

const createAcademicSemesterIntoDB = async(payLoad:IAcademicSemester)=>{
    const academicSemesterNameCodeValidation:TAcademicSemesterNameCodeValidation = {
        Autumn:"01",
        Summer:"02",
        Fall:"03"
    }
    if(academicSemesterNameCodeValidation[payLoad.name] !== payLoad.code){
        throw new Error("Invalid semester code")
    }
    const result = await AcademicSemester.create(payLoad)
    return result    
}

export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB
}