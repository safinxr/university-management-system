import { Schema, model } from "mongoose";
import validator from "validator";
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from "./student.interface";

// creating Schema
const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required:true},
  middleName: { type: String },
  lastName: {
    type: String,
    required: true,
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    //   message: "{VALUE} is not valid",
    // },
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: [true, "Father's name is required"] },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required"],
  },
  motherName: { type: String, required: [true, "Mother's name is required"] },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required"],
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: [true, "Local guardian's name is required"] },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required"],
  },
  contactNo: {
    type: String,
    required: [true, "Local guardian's contact number is required"],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required"],
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, "Student ID is required"],
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "User ID is required"],
    unique: true,
    ref:"userModel",
  },
  name: {
    type: userNameSchema,
    required: [true, "Student's name is required"],
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: [true, "Gender is required"],
  },
  dateOfBirth: { type: String, required: [true, "Date of birth is required"] },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: "not an email",
    },
  },
  contactNo: {
    type: String,
    required: [true, "Contact number is required"],
    maxLength: [11, "number cant be more then 11"],
  },
  emergencyContactNo: {
    type: String,
    required: [true, "Emergency contact number is required"],
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    required: [true, "Blood group is required"],
  },
  presentAddress: {
    type: String,
    required: [true, "Present address is required"],
  },
  permanentAddress: {
    type: String,
    required: [true, "Permanent address is required"],
  },
  guardian: {
    type: guardianSchema,
    required: [true, "Guardian information is required"],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, "Local guardian information is required"],
  },
  profileImage: { type: String },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// creating module

export const StudentModel = model<Student>("Student", studentSchema);
