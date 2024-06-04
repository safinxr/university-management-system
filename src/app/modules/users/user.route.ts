import express from "express";
import { userController } from "./user.controller";
import { validationMiddleware } from "../../middleware/validateRequest";
import { studentValidations } from "../student/student.validation";

const router = express.Router();

const alu = () =>{
  console.log("going");
}

router.post(
  "/create-student",
  validationMiddleware(studentValidations.createStudentValidationSchema),alu,
  userController.createStudent,
);

export const userRoute = router;
