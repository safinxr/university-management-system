import config from "../../config";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { AcademicSemesterModel } from "../academicSemester/academicSemester.model";
import { Student } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (password: string, studentData: Student) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_pass as string);
  userData.role = "student";

  

  const admissionSemester = await AcademicSemesterModel.findById(studentData.admissionSemester)

  userData.id = await generateStudentId(admissionSemester as TAcademicSemester);

  const createUserResult = await UserModel.create(userData);
  if (Object.keys(createUserResult).length) {
    studentData.id = createUserResult.id;
    studentData.user = createUserResult._id;

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const userService = {
  createStudentIntoDB,
};
