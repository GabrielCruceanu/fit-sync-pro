import { Metadata } from "next";
import { Link } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "FitSyncPro is a platform that connects trainers, nutritionist, and gyms with clients.",
};
export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-9">
      <h1 className="mb-4 text-center text-3xl">Cookie policy</h1>

      <article className="mb-4 text-justify">
        <p>
          Document informing users about the presence of cookies on FitSyncPro
          websites. The following information is intended to make the user aware
          of more details about the placement, use and management of cookies
          used by the websites{" "}
          <Link
            underline={"always"}
            href="https://www.FitSync.pro"
            target="_self"
          >
            FitSyncPro
          </Link>{" "}
          (ex.{" "}
          <Link
            underline={"always"}
            href="https://www.FitSync.pro"
            target="_self"
          >
            www.FitSync.pro
          </Link>
          ,{" "}
          <Link
            underline={"always"}
            href="https://www.FitSync.pro/blog"
            target="_self"
          >
            www.FitSync.pro/blog
          </Link>
          , etc).
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">What is a cookie?</strong>
        <p>
          A cookie is a text file containing information downloaded to your
          device when you visit (for the first time) a website. That cookie is
          sent back on each subsequent visit to the originating website or to
          another website that has recognises it. Cookies are useful because
          they allow a website to recognise a device and provide you with a more
          efficient and personalized experience.
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">What is NOT a cookie?</strong>
        <p>
          Cookies are NOT viruses! They use plain text formats. Not are made up
          of pieces of code, so they cannot be executed, nor run themselves.
          Consequently, they cannot be duplicated or replicated on other
          networks to run or replicate themselves again.
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">
          What types of cookies are used?
        </strong>
        <p className="mb-3">
          FitSyncPro uses both proprietary cookies and cookies on its sites. and
          third-party cookies.
        </p>
        <p>
          Proprietary cookies are cookies used by fitsync.pro when visit one of
          our websites and are as follows types: technical, session, persistent
          and functional:
        </p>
        <ul className="ml-4 mb-3">
          <li className="list-disc">
            Technical cookies are essential for the proper functioning of
            website. These cookies allow you to navigate between different
            sections of the website and use features specific functions.
          </li>
          <li className="list-disc">
            Session cookies are temporary cookies that allow you to navigate the
            site quickly and easily.
          </li>
          <li className="list-disc">
            Persistent cookies or 'tracking cookies' last longer sessions and
            remain in the browser for a period of time after the end of the
            session. session (unless you delete them).
          </li>
          <li className="list-disc">
            Functional cookies monitor the correct functioning of website and
            allow it to remember your choices your choices (e.g. language,
            username or region). They provide enhanced and personal features
            that help you to avoid select options each time you visit the
            website.
          </li>
        </ul>
        <p className="mb-3">
          Third-party cookies are cookies that are used by fitsync.pro when you
          visit one of our websites and are of following types:
        </p>

        <ul className="ml-4 mb-3">
          <li className="list-disc">
            Performance cookies (Google Analytics): collects anonymous and
            centralised information about the behaviour your online behaviour
            (browser type, IP address, browser system operating system used,
            domain name of the website you visited and when you left the site,
            the date and time you visited an website, etc.) for statistical
            purposes and for generating visitor profiles. For more information
            please visit{" "}
            <Link
              underline={"always"}
              href="https://policies.google.com/privacy?hl=en"
              target="_blank"
            >
              Google privacy policy
            </Link>
            .
          </li>
          <li className="list-disc">
            reCaptcha (Google Recaptcha) solution cookies: are used to check
            whether data entered on forms on the website forms have been entered
            by a human and not by a program automated program. To do this,
            reCAPTCHA analyses site visitor behaviour based on various
            characteristics. This analysis starts automatically when the site
            visitor enters the site. For the analysis, reCAPTCHA evaluates
            various information (e.g. IP address, duration of the visit). For
            more information please visit{" "}
            <Link
              underline={"always"}
              href="https://policies.google.com/privacy?hl=en#infocollect"
              target="_blank"
            >
              Google privacy policy
            </Link>
            .
          </li>
          <li className="list-disc">
            The cookies we use do not collect any data that would identity and
            therefore we cannot identify you with with them. Our websites may
            contain links to other websites that are not owned/operated by
            fitsync.ro (third party content, links and plug-ins). fitsync.ro
            does not assume responsibility for the privacy practices employed by
            these websites.
          </li>
        </ul>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">How do you agree?</strong>
        <p>
          When you first visit our websites, at the top of the screen a banner
          with a message about the cookie is displayed. If you give click the
          "Accept" button or continue to visit the site, then you implicitly
          agree to the use of cookies according to this cookie policy, unless
          you have set your browser to reject cookies (see below).
        </p>
      </article>

      <article className="mb-4 text-justify">
        <strong className="block text-lg">How do you reject cookies?</strong>
        <p className="mb-3">
          You can withdraw your consent at any time by deleting cookies cookies
          from your browser.
        </p>
        <p>
          These settings are usually found in the {`'`}options{`'`} or {""}{" "}
          menu.
          {`'`}preferences{`'`}
          in the browser. To understand these settings, you may find it useful
          to the following links (or go to the {`'`}Help{`'`} option in browser
          for more details):
        </p>

        <ul className="ml-4 mb-3">
          <li className="list-disc">
            <Link
              underline={"always"}
              href="https://support.microsoft.com/en-gb/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
              target="_blank"
            >
              Internet Explorer cookie settings
            </Link>
          </li>
          <li className="list-disc">
            <Link
              underline={"always"}
              href="https://support.mozilla.org/en-US/kb/cookies-information-websites-index-on-your-computer?redirectlocale=en-US&redirectslug=Cookies"
              target="_blank"
            >
              Cookie settings in Firefox
            </Link>
          </li>
          <li className="list-disc">
            <Link
              underline={"always"}
              href="https://support.google.com/chrome/answer/95647?hl=ro"
              target="_blank"
            >
              Cookie settings in Chrome
            </Link>
          </li>
          <li className="list-disc">
            <Link
              underline={"always"}
              href="https://support.apple.com/en-gb/HT201265"
              target="_blank"
            >
              Safari cookie settings
            </Link>
          </li>
        </ul>

        <p>
          Changing browser settings to reject cookies can affect the way you
          access our website and may affect the way you use it. be denied access
          to certain sections of it. You can change browser settings at any
          time.
        </p>
      </article>
    </div>
  );
}
