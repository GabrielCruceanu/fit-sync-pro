import { z } from "zod";
export const PersonalDetailsSchema = z.object({
  username: z.string().min(4, {
    message: "Numele de utilizator trebuie sa contină minimum 4 caractere.",
  }),
  phone: z
    .string()
    .min(10, { message: "Numărul trebuie sa contină minimum 10 caractere." })
    .max(10, { message: "Numărul trebuie sa contină maximum 10 caractere." }),
  day: z.string(),
  mouth: z.string(),
  year: z.string(),
  gender: z.string(),
  height: z.string(),
  weight: z.string(),
});
