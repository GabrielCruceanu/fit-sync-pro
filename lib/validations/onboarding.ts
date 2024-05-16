import { z } from "zod";
export const PersonalDetailsSchema = z.object({
  username: z.string().min(4, {
    message: "Username needs to be at least 4 characters long.",
  }),
  phone: z
    .string()
    .min(10, { message: "Phone number" })
    .max(10, { message: "Numărul trebuie sa contină maximum 10 caractere." }),
  day: z.string(),
  mouth: z.string(),
  year: z.string(),
  gender: z.string(),
  height: z.string(),
  weight: z.string(),
});
