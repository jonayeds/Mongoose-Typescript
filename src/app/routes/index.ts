import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.route";
import { UserRoutes } from "../modules/user/user.routes";

export const router = Router()

const moduleRoutes = [
    {
        path:"/user",
        route:UserRoutes
    },
    {
        path:"/student",
        route:StudentRoutes
    }
]
moduleRoutes.forEach(route=> router.use(route.path, route.route))
