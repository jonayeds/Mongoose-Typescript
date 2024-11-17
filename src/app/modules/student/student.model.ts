import { Schema, model, connect } from "mongoose";
import { Student } from "./student.interface";

const StudentSchema = new Schema<Student>({
    id:{
        type:String,
    },
    name:{
        firstName:{type:String, required:true},
        middleName:{type:String},
        lastName:{type:String, required:true}
    },
    gender:["Male","Female"],
    dateOfBirth:{ type:String},
    email:{type:String, required:true},
    contactNumber:{type:String, required:true},    
    emergencyContact:{type:String, required:true},
    bloodGroup:["A+","A-","B+","B-","O+","O-","AB+","AB-"],
    presentAddress:{type:String, required:true},    
    permanentAddress:{type:String, required:true},
    guardian:{
        fatherName:{type:String},
        fatherOccupation:{type:String},
        fatherContactNo:{type:String},
        motherName:{type:String},
        motherContactNo:{type:String},
        motherOccupation:{type:String}
    }   ,
    localGuardian:{
        name:{type:String},
        address:{type:String},
        occupation:{type:String},
        contactNo:{type:String}
    },
    profileImage:{type:String},
    isActive:["active",'blocked']
})