import { Router } from "express";
import { studentRoute } from "../modules/student/student.route";
import { userRoute } from "../modules/users/user.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";
import facultyRouter from "../modules/academicFaculty/academicFaculty.route";

const mainRouter = Router();

const allRoutes = [
  {
    path: "/students",
    route: studentRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/academic-semester",
    route: AcademicSemesterRoutes,
  },
  {
    path: "/academic-faculty",
    route: facultyRouter,
  },
];

allRoutes.forEach((router) => mainRouter.use(router.path, router.route));

export default mainRouter;
