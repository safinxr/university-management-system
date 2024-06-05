import mongoose from "mongoose";
import config from "../../config";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_pass as string);
  userData.role = "student";

  const admissionSemester = await AcademicSemester.findById(
    studentData.admissionSemester
  );

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    userData.id = await generateStudentId(
      admissionSemester as TAcademicSemester
    );

    const createUserResult = await User.create([userData], { session });
    if (!createUserResult.length) {
      throw new Error("Failed to create user");
    }
    console.log("a");
    studentData.id = createUserResult[0].id;
    studentData.user = createUserResult[0]._id;
    console.log("b");
    const newStudent = await Student.create([studentData], { session });
    console.log("c");
    console.log(newStudent);
    if (!newStudent.length) {
      throw new Error("Failed to create student");
    }

    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    
  }
};

export const userService = {
  createStudentIntoDB,
};
