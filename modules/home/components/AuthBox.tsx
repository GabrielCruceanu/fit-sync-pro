"use client";
import { Link } from "@nextui-org/react";
import { PagesLinks } from "@/constants/links";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@nextui-org/button";
import { redirect } from "next/navigation";

export default function AuthBox() {
  const supabase = createClient();
  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }
    return redirect(data.url);
  };
  const signInWithFacebook = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
    console.log("data", data);
    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }
    return redirect(data.url);
  };
  const signInWithApple = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "apple",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }
    return redirect(data.url);
  };

  return (
    <div className="justify-center p-4 max-w-screen-sm bg-white rounded-lg border border-gray-200 shadow lg:mt-0 lg:col-span-5 xl:col-span-4 sm:p-6 lg:p-8 dark:bg-background dark:border-gray-700">
      <div className="space-y-6">
        <h2 className="text-xl font-medium text-gray-900 dark:text-white">
          Alăturați-vă celor peste 3.000 de utilizatori folosind
        </h2>
        <form className="flex items-center space-x-4">
          <Button
            type={"submit"}
            onClick={() => signInWithGoogle()}
            className="w-full text-white bg-[#4284F4] hover:bg-[#3372df] dark:focus:ring-[#0f53c9] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Google
          </Button>
          <Button
            type={"submit"}
            onClick={() => signInWithFacebook()}
            className="w-full text-white bg-[#4284F4] hover:bg-[#3372df] dark:focus:ring-[#0f53c9] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Facebook
          </Button>
          <Button
            type={"submit"}
            onClick={() => signInWithApple()}
            className="w-full text-black bg-white hover:bg-zinc-100 dark:focus:ring-zinc-800 focus:ring-4 focus:outline-none focus:zinc-800 border-1 border-black font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Apple
          </Button>
        </form>
        <div className="flex items-center">
          <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
          <div className="px-5 text-center text-gray-500 dark:text-gray-400">
            sau
          </div>
          <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <Link
          href={PagesLinks.login.link}
          className="w-full flex justify-center text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-500 dark:focus:ring-primary-700"
        >
          Adresa de email
        </Link>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Nu sunteți înregistrat?{" "}
          <Link
            href={PagesLinks.signUp.link}
            className="text-primary-700 hover:underline dark:text-primary-500"
          >
            Creați un cont
          </Link>
        </div>
      </div>
    </div>
  );
}
