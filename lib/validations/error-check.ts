import { AuthResponseError, ToastVariant } from "@/ts/enum";

export const AuthErrorMessage = {
  CheckTheEmail: {
    title: "Check your email",
    description: "Check your email for the confirmation link.",
    variant: ToastVariant.default,
  },
  ResetPassword: {
    title: "Password reset",
    description: "Check your email for the password reset link.",
    variant: ToastVariant.default,
  },
  SuccessSignUp: {
    title: "Success",
    description: "Account created successfully",
    variant: ToastVariant.default,
  },
  DifferentPassword: {
    title: "Different passwords",
    description: "The passwords are different",
    variant: ToastVariant.destructive,
  },
  InvalidLoginCredentials: {
    title: "Invalid login credentials",
    description: "Invalid email or password",
    variant: ToastVariant.destructive,
  },
  EmailNotConfirmed: {
    title: "Email not confirmed",
    description: "Please confirm your email",
    variant: ToastVariant.destructive,
  },
  EmailUsedToMuch: {
    title: "Email used to much",
    description:
      "This email is already used. Please use another email or reset your password",
    variant: ToastVariant.destructive,
  },
};

export const OnboardingMessage = {
  Client: {
    Success: {
      title: "Client profile",
      description: "Client profile created successfully",
      variant: ToastVariant.default,
    },
    Error: {
      title: "Error",
      description: "Sorry, an error occurred",
      variant: ToastVariant.destructive,
    },
  },
  Trainer: {
    Success: {
      title: "Trainer profile",
      description: "Trainer profile created successfully",
      variant: ToastVariant.default,
    },
    Error: {
      title: "Error",
      description: "Sorry, an error occurred",
      variant: ToastVariant.destructive,
    },
  },

  Nutritionist: {
    Success: {
      title: "Nutritionist profile",
      description: "Nutritionist profile created successfully",
      variant: ToastVariant.default,
    },
    Error: {
      title: "Error",
      description: "Sorry, an error occurred",
      variant: ToastVariant.destructive,
    },
  },

  Gym: {
    Success: {
      title: "Gym profile",
      description: "Gym profile created successfully",
      variant: ToastVariant.default,
    },
    Error: {
      title: "Error",
      description: "Sorry, an error occurred",
      variant: ToastVariant.destructive,
    },
  },
};
export function checkErrorMessage(error: any) {
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
