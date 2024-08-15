import { Link } from "@nextui-org/react";
import { SocialLinks, TermsLinks } from "@/constants/links";
import { FacebookIcon, InstagramIcon, Mail, TwitterIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full border-divider px-4 py-11 antialiased">
      <div className="container mx-auto max-w-screen-xl flex flex-col lg:flex-row">
        <div className="mb-5 w-full lg:mb-0">
          <h3 className="mb-2 text-2xl font-semibold">About us</h3>
          <p className="text-sm">
            FitSyncPro is a platform that helps clients find the best personal
            trainers and gyms in their area. We provide a wide range of
            trainers, nutritionists, and gyms to help you achieve your fitness
            goals.
          </p>
        </div>
        <div className="mb-5 w-full lg:mb-0">
          <h3 className="mb-2 text-2xl font-semibold lg:text-center">
            Contact
          </h3>
          <div className="flex lg:justify-center">
            <div className="d-flex w-fit border-r-1 border-divider px-3">
              <div className="h-8 space-x-2.5">
                <Link href={SocialLinks.facebook.link} target="_blank">
                  <FacebookIcon className="dark:text-foreground" />
                </Link>
              </div>
            </div>
            <div className=" d-flex w-fit border-r-1 border-divider px-3">
              <div className="h-8 space-x-2.5">
                <Link href={SocialLinks.instagram.link} target="_blank">
                  <InstagramIcon className="dark:text-foreground" />
                </Link>
              </div>
            </div>
            <div className="d-flex w-fit border-r-1 border-divider px-3">
              <div className="h-8 space-x-2.5 fill-primary-500 hover:fill-primary-800">
                <Link href={SocialLinks.twitter.link} target="_blank">
                  <TwitterIcon className="dark:text-foreground" />
                </Link>
              </div>
            </div>
            <div className="px-3">
              <div className="h-8 space-x-2.5">
                <Link href={SocialLinks.mail.link} target="_blank">
                  <Mail className="dark:text-foreground" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 w-full lg:mb-0">
          <h3 className="mb-2 text-2xl font-semibold lg:text-right">Company</h3>
          <div className="flex flex-col text-sm md:flex-row lg:justify-end">
            <Link href={TermsLinks.termsAndConditions.link} target="_blank">
              {TermsLinks.termsAndConditions.name}
            </Link>
            <Link
              href={TermsLinks.privacyPolicy.link}
              target="_blank"
              className="md:px-3"
            >
              {TermsLinks.privacyPolicy.name}
            </Link>
            <Link href={TermsLinks.cookies.link} target="_blank">
              {TermsLinks.cookies.name}
            </Link>
          </div>

          <p className="mt-2 text-sm lg:text-right">
            © 2023 FitSyncPro. <br /> All rights reserved.
            <br />
            Powered by{" "}
            <Link
              href="https://kaapo.studio"
              target="_blank"
              className="text-foreground"
            >
              Kaapo.Studio
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
