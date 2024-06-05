import { RequestHandler } from "express";
import { studentServices } from "./student.service";
import { catchAsync } from "../../utils/catchAsync";

const createStudent: RequestHandler = catchAsync(async (req, res) => {
  const { student: studentData } = req.body;
  const result = await studentServices.createStudentIntoDB(studentData);
  res.status(200).json({
    success: true,
    message: "Student is created successfully",
    data: result,
  });
});

const getAllStudent: RequestHandler = catchAsync(async (req, res) => {
  const result = await studentServices.getAllStudentFromBD();
  res.status(200).json({
    success: true,
    message: "All students",
    data: result,
  });
});

const getSingleStudent: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await studentServices.getSingleStudentFromBD(id);
  res.status(200).json({
    success: true,
    message: "All students",
    data: result,
  });
});

const deleteStudent: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await studentServices.deleteStudent(id);
  res.status(200).json({
    success: true,
    message: "Student deleted",
    data: result,
  });
});

export const studentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
  deleteStudent,
};
