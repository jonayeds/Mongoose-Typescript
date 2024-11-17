import { Request, Response } from "express";
import { studentServices } from "./student.service";

const createStudent =async (req:Request, res:Response)=>{
    try{
        const student = req.body.student
        const result = await studentServices.crateStudentIntoDB(student)
        res.status(200)
        .json({
            success:true,
            message:"Successfully created student",
            data : result
        })
    }catch(err){
        console.log(err)
    }
}


export const studentControllers = {
    createStudent
}