import express from "express"
import { AcademicSemesterControllers } from "./academicSemester.controller"
import { AcademicSemesterValidation } from "./academicSemester.validation"
import { requestValidator } from "../../middleware/validateRequest"
const router = express.Router()

router.post("/create-academic-semester", requestValidator(AcademicSemesterValidation.createAcademicSemesterValidationSchema) ,  AcademicSemesterControllers.createAcademicSemester)

export const AcademicSemesterRoutes = router