// import ClientReduxProviderWrapper from '@/components/shared/client-redux-provider-wrapper';
import { UserLoginForm } from "@/modules/application/auth/components/login-form";
import Link from "next/link";
import { PagesLinks } from "@/constants/links";

export function UpdatePassword() {
  return (
    <div className="lg:flex justify-center items-center min-h-screen">
      <div className="w-full relative flex md:min-h-[800px]  flex-col items-center justify-center md:grid lg:max-w-screen-xl lg:grid-cols-2 lg:px-0 lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:rounded overflow-hidden">
        <div className="relative flex p-3 px-8 h-full flex-col bg-muted lg:p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900 bg-opacity-60 bg-[url('/images/auth/login.jpg')] bg-cover bg-center bg-no-repeat  bg-blend-multiply" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            Fit<span className="text-primary">Sync</span>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;If you don’t find the time, if you don’t do the work, you
                don’t get the results.&rdquo;
              </p>
              <footer className="text-sm">Arnold Schwarzenegger</footer>
            </blockquote>
          </div>
        </div>
        <div className="container py-8 lg:p-8">
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
                href={PagesLinks.signUp.link}
                className="underline underline-offset-4 hover:text-primary transition-all"
              >
                {PagesLinks.signUp.name}
              </Link>
              <Link
                href={PagesLinks.login.link}
                className="underline underline-offset-4 hover:text-primary transition-all"
              >
                {PagesLinks.login.name}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
