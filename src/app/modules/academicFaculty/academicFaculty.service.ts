import { TFaculty } from "./academicFaculty.interface";
import { facultyModel } from "./academicFaculty.model";

const createFacultyIntoDB = async (payload: TFaculty) => {
  const result = await facultyModel.create(payload);
  return result;
};

const getFaculty = async () => {
  const result = await facultyModel.find();
  return result;
};

const getSingleFaculty = async (id: string) => {
  const result = await facultyModel.findById(id);
  return result;
};

const updateFaculty = async (id: string, payload: Partial<TFaculty>) => {
  const result = await facultyModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const facultyServices = {
  createFacultyIntoDB,
  getFaculty,
  getSingleFaculty,
  updateFaculty,
};
