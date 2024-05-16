import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email address invalid" }),
  password: z
    .string()
    .min(8, { message: 'Password need to have minumum 8 characters' }),
});
export const ForgotPasswordSchema = z.object({
  email: z.string().email({ message: "Email address invalid" }),
});
export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email address invalid" }),
  password: z
    .string()
    .min(8, { message: "Password need to have minumum 8 characters" }),
  confirmPassword: z
    .string()
    .min(8, { message: "Password need to have minumum 8 characters" }),
});
