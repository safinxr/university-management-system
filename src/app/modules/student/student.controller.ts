import { NextFunction, Request, Response } from "express";
import { studentServices } from "./student.service";
import { z } from "zod";
import studentValidationSchema from "./student.validation";

const createStudent = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { student: studentData } = req.body;
    // const zodValidation = studentValidationSchema.parse(studentData)
    const result = await studentServices.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (err) {
   next(err)
  }
};

const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await studentServices.getAllStudentFromBD();
    res.status(200).json({
      success: true,
      message: "All students",
      data: result,
    });
  } catch (err) {
    next(err)
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await studentServices.getSingleStudentFromBD(id);
    res.status(200).json({
      success: true,
      message: "All students",
      data: result,
    });
  } catch (err) {
   next(err)
  }
};

export const studentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
