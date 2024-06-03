import { nameCodeMapper } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemesterModel } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (nameCodeMapper[payload.name] !== payload.code) {
    throw new Error("Invalid Semester code");
  }
  const result = await AcademicSemesterModel.create(payload);
  return result;
};

const getAcademicSemester = async () => {
  const result = await AcademicSemesterModel.find();
  return result;
};

const getSingleAcademicSemester = async (id: string) => {
  const result = await AcademicSemesterModel.findById(id);
  return result;
};

const updateAcademicSemester = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    nameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error("Invalid Semester code");
  }
  const result = await AcademicSemesterModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
