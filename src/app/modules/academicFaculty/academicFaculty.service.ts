import { TFaculty } from "./academicFaculty.interface";
import { Faculty } from "./academicFaculty.model";

const createFacultyIntoDB = async (payload: TFaculty) => {
  const result = await Faculty.create(payload);
  return result;
};

const getFaculty = async () => {
  const result = await Faculty.find();
  return result;
};

const getSingleFaculty = async (id: string) => {
  const result = await Faculty.findById(id);
  return result;
};

const updateFaculty = async (id: string, payload: Partial<TFaculty>) => {
  const result = await Faculty.findOneAndUpdate({ _id: id }, payload, {
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
