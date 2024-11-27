import { Schema, model } from 'mongoose';
// import validator from 'validator';
import bcrypt from 'bcrypt';
import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  // StudentMethods,
  TUsername,
} from './student.interface';
import config from '../../config';

const userNameSchema = new Schema<TUsername>({
  firstName: {
    type: String,
    required: [true, 'First name needed'],
    trim: true,
    // validate: {
    //   validator:function(value:string){
    //     const firstNameStr = value.charAt(0).toUpperCase() +value.slice(1).toLowerCase()
    //     return firstNameStr === value
    //   },
    //   message:"First name must be Uppercase and other should be lowercase"
    // }
  },
  middleName: { type: String, trim: true },
  lastName: {
    type: String,
    required: true,
    trim: true,
    // validate:{
    //   validator:(value:string)=>{
    //     return validator.isAlpha(value)
    //   }
    // }
  },
});
const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String },
  fatherOccupation: { type: String },
  fatherContactNo: { type: String },
  motherName: { type: String },
  motherContactNo: { type: String },
  motherOccupation: { type: String },
});
const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String },
  address: { type: String },
  occupation: { type: String },
  contactNo: { type: String },
});

const studentSchema = new Schema<TStudent, StudentModel>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  user:{
    type:Schema.Types.ObjectId,
    required:[true, "User Id is required"],
    unique:true,
    ref:"User"
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be 6 characters long at least'],
  },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['Male', 'Female'],
      message: '{VALUE} is not valid',
    },
    required: true,
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    // validate:{
    //   validator:(value:string)=>{
    //     return validator.isEmail(value)
    //   },
    //   message:"{VALUE} is not a valid email"
    // },
  },
  contactNumber: { type: String, required: true, trim: true },
  emergencyContact: { type: String, required: true, trim: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImage: { type: String },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// mongoose virtual
studentSchema.virtual("fullName").get(function(){
  return this.name.firstName+this.name.middleName+this.name.lastName
} )






// pre save middleware
studentSchema.pre('save', async function (next) {
  // Hashing password and save into DB
  this.password = await bcrypt.hash(this.password, Number(config.salt_rounds));
  next();
});
// post save middleware
studentSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

// query middleware
studentSchema.pre('find', function (next) {
  this.find({ isDeleted: false });
  next();
});
studentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: false });
  next();
});
studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

//creating a custom instance model
// studentSchema.methods.isUserExist = async function(id:string){
//   const existingUser = await Student.findOne({id})
//   return existingUser
// }

studentSchema.statics.isUserExist = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
