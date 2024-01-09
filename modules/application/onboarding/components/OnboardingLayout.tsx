import HeaderForm from "@/modules/application/auth/components/header-form";
import { AuthType } from "@/ts/enum";
import { UserLoginForm } from "@/modules/application/auth/components/login-form";
import Link from "next/link";
import { ApplicationLinks } from "@/constants/links";

export function OnboardingLayout() {
  return (
    <div className="lg:flex justify-center items-center min-h-screen">
      <div className="w-full relative flex md:min-h-[800px]  flex-col items-center justify-center md:grid lg:max-w-screen-xl lg:grid-cols-2 lg:px-0 lg:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] lg:rounded overflow-hidden">
        <HeaderForm
          authType={AuthType.Login}
          quote={
            "But effort? Nobody can judge that because effort is between you and you."
          }
          author={"Ray Lewis, American Football Player"}
        />
        <div className="container px-4 py-8 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Autentificare
              </h1>
              <p className="text-sm text-muted-foreground">
                Introduceți adresa de e-mail și parolă în câmpurile de mai jos
                pentru a intră în cont.
              </p>
            </div>
            <UserLoginForm />
            <p className="flex justify-between  text-sm text-muted-foreground">
              <Link
                href={ApplicationLinks.signUp.link}
                className="underline underline-offset-4 hover:text-primary transition-all"
              >
                {ApplicationLinks.signUp.name}
              </Link>
              <Link
                href={ApplicationLinks.forgotPassword.link}
                className="underline underline-offset-4 hover:text-primary transition-all"
              >
                {ApplicationLinks.forgotPassword.name}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
