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
  UserAlreadyRegistered = "User already registered",
  EmailAlreadyRegistered = "Email already registered",
  UsernameInvalid = 'Character invalid or too few, use only "a-z", "0-9" and "_"',
  UsernameIsNotAvailable = "Username is not available",
  InputRequired = "Input required",
  NeedOnlyOne = "You need to select only one",
  OnlyLetter = 'Character invalid or too few, use only "a-z" ',
  OnlyNumbers = 'Character invalid or too few, use only "0-9" ',
  HeightGreater = "The height must be greater than 100 cm",
  WeightGreater = "The weight must be greater than 30 kg",
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
