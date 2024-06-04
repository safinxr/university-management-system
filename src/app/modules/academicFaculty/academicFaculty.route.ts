import { Router } from "express";
import { facultyController } from "./academicFaculty.controller";
import { validationMiddleware } from "../../middleware/validateRequest";
import { AcademicFacultyValidation } from "./academicFaculty.validation";

const facultyRouter = Router();

facultyRouter.use(
  "/create-faculty",
  validationMiddleware(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  facultyController.createFaculty,
);

facultyRouter.use("/", facultyController.getFaculty);
facultyRouter.use("/:id", facultyController.getSingleFaculty);
facultyRouter.use(
  "/:id",
  validationMiddleware(
    AcademicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  facultyController.updateFaculty,
);

export default facultyRouter;

