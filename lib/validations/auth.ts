import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Adresa de e-mail nu este validă.' }),
  password: z
    .string()
    .min(8, { message: 'Parola trebuie sa contină minimum 8 caractere.' }),
});
export const ForgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Adresa de e-mail nu este validă.' }),
});
export const RegisterSchema = z.object({
  email: z.string().email({ message: 'Adresa de e-mail nu este validă.' }),
  password: z
    .string()
    .min(8, { message: 'Parola trebuie sa contină minimum 8 caractere.' }),
  confirmPassword: z
    .string()
    .min(8, { message: 'Parola trebuie sa contină minimum 8 caractere.' }),
});
