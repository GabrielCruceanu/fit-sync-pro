// import ClientReduxProviderWrapper from '@/components/shared/client-redux-provider-wrapper';
import { UserLoginForm } from "@/modules/application/auth/components/login-form";
import Link from "next/link";
import { ApplicationLinks } from "@/constants/links";
import HeaderForm from "@/modules/application/auth/components/header-form";
import { AuthType } from "@/ts/enum";

export function UpdatePasswordScreen() {
  return (
    <div className="lg:flex justify-center items-center min-h-screen">
      <div className="w-full relative flex md:min-h-[800px]  flex-col items-center justify-center md:grid lg:max-w-screen-xl lg:grid-cols-2 lg:px-0 lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:rounded overflow-hidden lg:dark:border-1 lg:dark:border-default">
        <HeaderForm
          authType={AuthType.Login}
          quote={
            "If you don’t find the time, if you don’t do the work, you\n" +
            "                don’t get the results."
          }
          author={"Arnold Schwarzenegger"}
        />
        <div className="container p-4 py-8 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Actualizare parola
              </h1>
              <p className="text-sm text-muted-foreground">
                Introdu adresa de e-mail si parola in campurile de mai jos
                pentru a intra in cont.
              </p>
            </div>
            {/*<ClientReduxProviderWrapper>*/}
            <UserLoginForm />
            {/*</ClientReduxProviderWrapper>*/}
            <p className="flex justify-between  text-sm text-muted-foreground">
              <Link
                href={ApplicationLinks.signUp.link}
                className="underline underline-offset-4 hover:text-primary transition-all"
              >
                {ApplicationLinks.signUp.name}
              </Link>
              <Link
                href={ApplicationLinks.login.link}
                className="underline underline-offset-4 hover:text-primary transition-all"
              >
                {ApplicationLinks.login.name}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}