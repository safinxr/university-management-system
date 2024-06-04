import { TDepartment } from "./academicDepartment.interface";
import { Department } from "./academicDepartment.model";

const createAcademicDepartmentIntoDB = async (payload: TDepartment) => {
  const result = await Department.create(payload);
  return result;
};

const getAllAcademicDepartmentsFromDB = async () => {
  const result = await Department.find().populate("academicFaculty");
  return result;
};

const getSingleAcademicDepartmentFromDB = async (id: string) => {
  const result = await Department.findById(id).populate("academicFaculty")
  return result;
};

const updateAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<TDepartment>
) => {
  const result = await Department.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentsFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentIntoDB,
};
