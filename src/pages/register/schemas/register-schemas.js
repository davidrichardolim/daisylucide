import {z} from "zod"

export const registerSchema = z.object({
    name: z.string().trim().min(2, "nama minimal 2 karakter"),
    email: z.email(),
    password: z.string().trim().min(8, "password minimal 8 karakter")
})

export default registerSchema