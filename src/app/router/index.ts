import { Router } from "express";
import { studentRoute } from "../modules/student/student.route";
import { userRoute } from "../modules/users/user.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";
import facultyRouter from "../modules/academicFaculty/academicFaculty.route";
import { AcademicDepartmentRoutes } from "../modules/academicDepartment/academicDepartment.route";

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
  {
    path: "/academic-department",
    route: AcademicDepartmentRoutes,
  },
];

allRoutes.forEach((router) => mainRouter.use(router.path, router.route));

export default mainRouter;
