import express from "express";
import { userController } from "./user.controller";
import { validationMiddleware } from "../../middleware/validateRequest";
import { studentValidations } from "../student/student.validation";

const router = express.Router();


router.post(
  "/create-student",
  validationMiddleware(studentValidations.createStudentValidationSchema),
  userController.createStudent,
);

export const userRoute = router;
