import {  Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { AcademicSemesterServices } from "./academicSemester.service";
import { response } from "../../utils/sendResponse";

const createAcademicSemester = catchAsync(async(req:Request, res:Response)=> {    
    const result =await AcademicSemesterServices.createAcademicSemesterIntoDB(req.body)
    response(res,{
        statusCode:200,
        success:true,
        message:"Successfully created an Academic Semester",
        data:result
    })
})

const getAllAcademicSemester = catchAsync(async(req:Request,res:Response)=>{
    const result = await AcademicSemesterServices.getAllAcademicSemesterFromDB()
    response(res,{
        statusCode:200,
        success:true,
        message:"Successfully fetched all academic semester data",
        data:result
    })
})

export const AcademicSemesterControllers = {
    createAcademicSemester,
    getAllAcademicSemester
}