import { Schema, model} from "mongoose";
import { Guardian, LocalGuardian, Student, Username } from "./student.interface";

const userNameSchema = new Schema<Username>({
    firstName:{type:String, required:true},
    middleName:{type:String},
    lastName:{type:String, required:true}
})
const guardianSchema = new Schema<Guardian>({
    fatherName:{type:String},
        fatherOccupation:{type:String},
        fatherContactNo:{type:String},
        motherName:{type:String},
        motherContactNo:{type:String},
        motherOccupation:{type:String}
})
const localGuardianSchema = new Schema<LocalGuardian>({
    name:{type:String},
    address:{type:String},
    occupation:{type:String},
    contactNo:{type:String}
})

const studentSchema = new Schema<Student>({
    id:{
        type:String,
    },
    name:userNameSchema,
    gender:["Male","Female"],
    dateOfBirth:{ type:String},
    email:{type:String, required:true},
    contactNumber:{type:String, required:true},    
    emergencyContact:{type:String, required:true},
    bloodGroup:["A+","A-","B+","B-","O+","O-","AB+","AB-"],
    presentAddress:{type:String, required:true},    
    permanentAddress:{type:String, required:true},
    guardian:guardianSchema,
    localGuardian:localGuardianSchema,
    profileImage:{type:String},
    isActive:["active",'blocked']
})

export const StudentModel = model<Student>("Student", studentSchema)