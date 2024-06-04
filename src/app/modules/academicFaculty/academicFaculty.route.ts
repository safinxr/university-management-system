import { Router } from "express";
import { facultyController } from "./academicFaculty.controller";
import { validationMiddleware } from "../../middleware/validateRequest";
import { AcademicFacultyValidation } from "./academicFaculty.validation";

const facultyRouter = Router();

facultyRouter.post(
  "/create-faculty",
  validationMiddleware(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  facultyController.createFaculty,
);

facultyRouter.get("/", facultyController.getFaculty);
facultyRouter.get("/:id", facultyController.getSingleFaculty);
facultyRouter.patch(
  "/:id",
  validationMiddleware(
    AcademicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  facultyController.updateFaculty,
);

export default facultyRouter;

