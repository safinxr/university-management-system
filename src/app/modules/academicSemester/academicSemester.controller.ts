import { catchAsync } from "../../utils/catchAsync";
import { academicSemesterServices } from "./academicSemester.service";

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );
  res.status(200).json({
    success: true,
    message: "Academic Semester created successfully",
    data: result,
  });
});

const getAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.getAcademicSemester();
  res.status(200).json({
    success: true,
    message: "Here is all Academic Semester",
    data: result,
  });
});
const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await academicSemesterServices.getSingleAcademicSemester(id);
  res.status(200).json({
    success: true,
    message: " Academic Semester find by id",
    data: result,
  });
});

const updateSingleAcademicSemester = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await academicSemesterServices.updateAcademicSemester(
    id,
    payload,
  );
  res.status(200).json({
    success: true,
    message: " Academic Semester Updated",
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAcademicSemester,
  getSingleAcademicSemester,
  updateSingleAcademicSemester,
};
