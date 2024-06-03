import { RequestHandler } from "express";
import studentValidationSchema from "../student/student.validation";
import { userService } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";

const createStudent: RequestHandler = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;
  //   const zodValidation = studentValidationSchema.parse(studentData);
  const result = await userService.createStudentIntoDB(password, studentData);
  res.status(200).json({
    success: true,
    message: "Student is created successfully",
    data: result,
  });
});

export const userController = {
  createStudent,
};
