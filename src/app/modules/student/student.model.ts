import { Schema, model } from 'mongoose';
// import validator from 'validator';
import {
  Guardian,
  LocalGuardian,
  Student,
  Username,
} from './student.interface';

const userNameSchema = new Schema<Username>({
  firstName: { type: String, required: [true, "First name needed"], trim:true, 
    // validate: {
    //   validator:function(value:string){
    //     const firstNameStr = value.charAt(0).toUpperCase() +value.slice(1).toLowerCase()
    //     return firstNameStr === value
    //   },
    //   message:"First name must be Uppercase and other should be lowercase"
    // }
   },
  middleName: { type: String, trim:true },
  lastName: { type: String, required: true, trim:true,
    // validate:{
    //   validator:(value:string)=>{
    //     return validator.isAlpha(value)
    //   }
    // }
   },
});
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String },
  fatherOccupation: { type: String },
  fatherContactNo: { type: String },
  motherName: { type: String },
  motherContactNo: { type: String },
  motherOccupation: { type: String },
});
const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String },
  address: { type: String },
  occupation: { type: String },
  contactNo: { type: String },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required:true,
    unique:true
  },
  name: {
    type:userNameSchema,
    required:true
  },
  gender:{
    type:String,
    enum:{
      values:['Male', 'Female'],
      message:"{VALUE} is not valid"
    },
    required:true
  },
  dateOfBirth: { type: String },
  email: { type: String, required: true, unique:true, trim:true, 
    // validate:{
    //   validator:(value:string)=>{
    //     return validator.isEmail(value)
    //   },
    //   message:"{VALUE} is not a valid email"
    // },
   },
  contactNumber: { type: String, required: true , trim:true},
  emergencyContact: { type: String, required: true ,trim:true},
  bloodGroup: {
    type:String,
    enum:['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: {
    type:guardianSchema,
    required:true
  },
  localGuardian: {
    type:localGuardianSchema,
    required:true
  },
  profileImage: { type: String },
  isActive: {
    type:String,
    default:"active",
    enum:['active', 'blocked']
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
    