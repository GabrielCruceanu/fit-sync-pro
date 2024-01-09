import { UserSignUpForm } from "@/modules/application/auth/components/signup-form";
import Link from "next/link";
import { WebsiteLinks, TermsLinks, ApplicationLinks } from "@/constants/links";
import HeaderForm from "@/modules/application/auth/components/header-form";
import { AuthType } from "@/ts/enum";

export function SingUp() {
  return (
    <div className="lg:flex justify-center items-center min-h-screen">
      <div className="w-full relative flex md:min-h-[800px] flex-col items-center justify-center md:grid lg:max-w-screen-xl lg:grid-cols-2 lg:px-0 lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:rounded overflow-hidden">
        <HeaderForm
          authType={AuthType.Register}
          quote={"Action is the foundational key to all success."}
          author={"Pablo Picasso"}
        />
        <div className="container p-4 py-8 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Inregistrare
              </h1>
              <p className="text-sm text-muted-foreground">
                Completeaza campurile de mai jos pentru a intra pe platforma.
              </p>
            </div>
            <UserSignUpForm />

            <p className="px-4 text-center text-sm text-muted-foreground">
              Prin crearea contului sunteți de acord cu{" "}
              <Link
                href={TermsLinks.termeniSiConditii.link}
                className="underline underline-offset-4 hover:text-primary transition-all"
              >
                {TermsLinks.termeniSiConditii.name}
              </Link>{" "}
              și{" "}
              <Link
                href={TermsLinks.gdpr.link}
                className="underline underline-offset-4 hover:text-primary transition-all"
              >
                {TermsLinks.gdpr.name}
              </Link>{" "}
              .
            </p>

            <p className="flex justify-between  text-sm text-muted-foreground">
              <Link
                href={ApplicationLinks.login.link}
                className="underline underline-offset-4 hover:text-primary transition-all"
              >
                {ApplicationLinks.login.name}
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
