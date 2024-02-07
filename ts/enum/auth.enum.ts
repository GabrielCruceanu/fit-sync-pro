export enum AuthProvider {
  Google = "google",
  Facebook = "facebook",
  Apple = "apple",
  Email = "email",
}

export enum AuthType {
  Login = "login",
  Register = "register",
  LostPassword = "lost-password",
}

export enum AuthInputError {
  UserAlreadyRegistered = "Userul exista deja",
  EmailAlreadyRegistered = "Adresa de email exista deja",
  UsernameInvalid = 'Caractere invalide, poti folosi doar "a-z", "0-9" si "_"',
  UsernameIsNotAvailable = "Numele de utilizator este luat.",
  InputRequired = "Acest camp este obligatoriu",
  NeedOnlyOne = "Este necesar sa selectati unul din aceste campuri",
  OnlyLetter = 'Caractere invalide sau prea putine, foloseste doar "a-z"',
  OnlyNumbers = 'Caractere invalide sau prea putine, foloseste doar "0-9"',
  HeightGreater = "Inaltimea treabuie sa fie mai mare de 50 cm",
  WeightGreater = "Greutatea treabuie sa fie mai mare de 30 Kg",
}

export enum AuthResponseError {
  InvalidLoginCredentials = "Invalid login credentials",
  NewPasswordNeedBeDifferent = "New password should be different from the old password.",
  EmailUsedToMuch = "Email rate limit exceeded",
  EmailNotConfirmed = "Email not confirmed",
}

export enum UserType {
  ADMIN = "admin",
  CLIENT = "client",
  NUTRITIONIST = "nutritionist",
  TRAINER = "trainer",
  GYM = "gym",
}