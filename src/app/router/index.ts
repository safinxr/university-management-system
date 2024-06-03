import { Router } from "express";
import { studentRoute } from "../modules/student/student.route";
import { userRoute } from "../modules/users/user.route";

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
];

allRoutes.forEach((router) => mainRouter.use(router.path, router.route));


export default mainRouter