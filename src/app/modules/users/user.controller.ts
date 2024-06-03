import { NextFunction, Request, Response } from "express";
import studentValidationSchema from "../student/student.validation";
import { userService } from "./user.service";

const createStudent = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { password, student: studentData } = req.body;
    //   const zodValidation = studentValidationSchema.parse(studentData);
    const result = await userService.createStudentIntoDB(password, studentData);
    res.status(200).json({
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (err) {
    next(err)
  }
};


export const userController = {
    createStudent,
}