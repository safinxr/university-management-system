import { catchAsync } from "../../utils/catchAsync";
import { facultyServices } from "./academicFaculty.service";

const createFaculty = catchAsync(async (req, res) => {
  const result = await facultyServices.createFacultyIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: " Academic Faculty Created",
    data: result,
  });
});

const getFaculty = catchAsync(async (req, res) => {
  const result = await facultyServices.getFaculty();
  res.status(200).json({
    success: true,
    message: "Get all Academic Faculty",
    data: result,
  });
});

const getSingleFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await facultyServices.getSingleFaculty(id);
  res.status(200).json({
    success: true,
    message: "Faculty find by id",
    data: result,
  });
});

const updateFaculty = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await facultyServices.updateFaculty(id, payload);
  res.status(200).json({
    success: true,
    message: " Faculty Updated",
    data: result,
  });
});

export const facultyController = {
  createFaculty,
  getFaculty,
  getSingleFaculty,
  updateFaculty,
};
