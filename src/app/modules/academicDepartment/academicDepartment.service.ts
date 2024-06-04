import { TDepartment } from "./academicDepartment.interface";
import { DepartmentModel } from "./academicDepartment.model";

const createAcademicDepartmentIntoDB = async (payload: TDepartment) => {
  const result = await DepartmentModel.create(payload);
  return result;
};

const getAllAcademicDepartmentsFromDB = async () => {
  const result = await DepartmentModel.find();
  //   .populate("academicFaculty");
  return result;
};

const getSingleAcademicDepartmentFromDB = async (id: string) => {
  const result = await DepartmentModel.findById(id)
//   .populate("academicFaculty");
  return result;
};

const updateAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<TDepartment>
) => {
  const result = await DepartmentModel.findOneAndUpdate({ _id: id }, payload, {
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
