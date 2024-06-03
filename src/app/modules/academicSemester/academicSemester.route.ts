import express from "express";
import { AcademicSemesterControllers } from "./academicSemester.controller";
import { validationMiddleware } from "../../middleware/validateRequest";
import { academicSemesterValidation } from "./academicSemester.validation";
const router = express.Router();

router.post(
  "/create-academic-semester",
  validationMiddleware(
    academicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);

router.get("/", AcademicSemesterControllers.getAcademicSemester);
router.get("/:id", AcademicSemesterControllers.getSingleAcademicSemester);
router.patch(
  "/:id",
  validationMiddleware(
    academicSemesterValidation.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.updateSingleAcademicSemester,
);

export const AcademicSemesterRoutes = router;
