import { z } from "zod";

const userValidationSchema = z.object({
    id:z.string(),
    password:z.string().min(8,{message:"Password cannot be less than 6 characters"}),
    needsPasswordChange:z.boolean().optional().default(true),
    role:z.enum(["faculty", "student", "admin"]),
    status:z.enum(["inProgress", "blocked"]).default("inProgress"),
    isDeleted:z.boolean().optional().default(false)
})

export const UserValidation = {
    userValidationSchema
}