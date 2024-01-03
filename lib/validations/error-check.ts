import { AuthResponseError, ToastVariant } from "@/ts/enum";

export const AuthErrorMessage = {
  CheckTheEmail: {
    title: "Verifica e-mailul",
    description: "Verifica-ti e-mailul pentru linkul de autentificare!",
    variant: ToastVariant.default,
  },
  ResetPassword: {
    title: "Link paronala noua",
    description: "E-mailul de recuperare a parolei a fost trimis.",
    variant: ToastVariant.default,
  },
  SuccessSignUp: {
    title: "Inregistrare cu success",
    description: "Verifica-ti e-mailul pentru linkul de confirmare!",
    variant: ToastVariant.default,
  },
  DifferentPassword: {
    title: "Parole diferite",
    description: "Parolele trebuie sa fie identice.",
    variant: ToastVariant.destructive,
  },
  InvalidLoginCredentials: {
    title: "Credentiale invalide",
    description: "Adresa de email sau parola nu este valida",
    variant: ToastVariant.destructive,
  },
  EmailNotConfirmed: {
    title: "Adresa de email neconfirmata",
    description: "Adresa de email nu a fost confirmata, verifica in spam",
    variant: ToastVariant.destructive,
  },
  EmailUsedToMuch: {
    title: "Incercari multiple",
    description:
      "Ai facut prea multe cerereri de resetare. Incearca mai tarziu.",
    variant: ToastVariant.destructive,
  },
};
export function checkErrorMessage(error: any) {
  console.log("error?.message", error?.message);
  switch (error?.message) {
    case AuthResponseError.InvalidLoginCredentials:
      return {
        title: AuthErrorMessage.InvalidLoginCredentials.title,
        description: AuthErrorMessage.InvalidLoginCredentials.description,
        variant: AuthErrorMessage.InvalidLoginCredentials.variant,
      };
    case AuthResponseError.EmailNotConfirmed:
      return {
        title: AuthErrorMessage.EmailNotConfirmed.title,
        description: AuthErrorMessage.EmailNotConfirmed.description,
        variant: AuthErrorMessage.EmailNotConfirmed.variant,
      };
    default:
      return {
        title: error.name,
        description: error.message,
        variant: ToastVariant.destructive,
      };
  }
}
