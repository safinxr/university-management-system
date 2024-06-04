import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { UserModel } from "./user.model";

const findLastStudentId = async () => {
  const lastStudent = await UserModel.findOne(
    {
      role: "student",
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastStudent?.id ? lastStudent.id : undefined;
};

export const generateStudentId = async (payload: TAcademicSemester) => {
  let currentId = (0).toString();
  const lastStudent = await findLastStudentId();
  const lastStudentSemesterYear = lastStudent?.substring(0, 4);
  const lastStudentSemesterCode = lastStudent?.substring(4, 6);
  const currentSemesterCode = payload.code;
  const currentYear = payload.year;

  if (
    lastStudent &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentSemesterYear === currentYear
  ) {
    currentId = lastStudent.substring(6);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");
  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};
