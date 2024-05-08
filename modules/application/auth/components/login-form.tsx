"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "@/lib/validations/auth";
import { cn } from "@/lib/utils";

import {
  AuthErrorMessage,
  checkErrorMessage,
} from "@/lib/validations/error-check";
import { AuthProvider } from "@/ts/enum";
import { createClient } from "@/utils/supabase/create-client";
import { ApplicationLinks } from "@/constants/links";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { Icons } from "@/components/icons";
import { Provider } from "@supabase/gotrue-js";
import { toast } from "@/components/use-toast";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@nextui-org/shared-icons";
import { useStore } from "@/store";
import { UserDetails } from "@/ts/types";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof LoginSchema>;

export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
  const supabase = createClient();
  const router = useRouter();
  const [passwordIsVisible, setPasswordIsVisible] = React.useState(false);
  const [emailValue, setEmailValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  const {
    isLoading,
    setIsLoading,
    isGoogleLoading,
    setIsGoogleLoading,
    isFacebookLoading,
    setIsFacebookLoading,
    setUser,
  } = useStore((state) => state);
  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (emailValue === "") return false;

    return !validateEmail(emailValue);
  }, [emailValue]);
  const togglePasswordVisibility = () =>
    setPasswordIsVisible(!passwordIsVisible);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(LoginSchema) });

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.signInWithPassword({
        email: data.email.toLowerCase(),
        password: data.password,
      });

      if (user) {
        const { data: users, error } = await supabase.from("users").select("*");

        if (users) {
          const user = users[0] as UserDetails;
          console.log("userDetails", user);
          setUser(user);
        }
      }
      setIsLoading(false);

      if (!error && !user) {
        return toast({
          title: AuthErrorMessage.CheckTheEmail.title,
          description: AuthErrorMessage.CheckTheEmail.description,
          variant: AuthErrorMessage.CheckTheEmail.variant,
        });
      }

      if (error) {
        const errorToast = checkErrorMessage(error);
        return toast(errorToast);
      }

      location.replace(ApplicationLinks.settings.link);
    } catch (error: any) {
      console.log("Error thrown:", error.message);

      const errorToast = checkErrorMessage(error);
      return toast(errorToast);
    }
  }

  async function loginWithProvider(provider: AuthProvider) {
    if (provider === AuthProvider.Google) {
      setIsGoogleLoading(true);
    } else if (provider === AuthProvider.Facebook) {
      setIsFacebookLoading(true);
    }
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider as Provider,
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      });
      if (error) {
        return toast({
          title: error.name,
          description: error.message,
          variant: "destructive",
        });
      }
      router.refresh();
    } catch (error: any) {
      console.log("Error thrown:", error.message);

      return toast({
        title: error.title,
        description: error.message,
        variant: "destructive",
      });
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          {/*Email*/}
          <div className="grid gap-1">
            <Input
              id="email"
              placeholder="nume@domeniu.ro"
              type="email"
              label="Email"
              value={emailValue}
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              variant="bordered"
              disabled={isLoading || isGoogleLoading || isFacebookLoading}
              {...register("email")}
              color={isInvalid ? "danger" : "default"}
              isInvalid={isInvalid}
              onValueChange={setEmailValue}
              errorMessage={errors?.email?.message}
            />
          </div>

          {/*Password*/}
          <div className="grid gap-1">
            <Input
              id="password"
              label="Parola"
              placeholder="••••••••"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              variant="bordered"
              disabled={isLoading || isGoogleLoading || isFacebookLoading}
              value={passwordValue}
              onValueChange={setPasswordValue}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  {passwordIsVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={passwordIsVisible ? "text" : "password"}
              {...register("password")}
              color={errors?.password ? "danger" : "default"}
              errorMessage={errors?.password?.message}
            />
          </div>

          <Button disabled={isLoading} type={"submit"} color="primary">
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Autentificare
          </Button>
          {/*Social Login*/}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                sau
              </span>
            </div>
          </div>
          <Button
            variant="bordered"
            type="button"
            disabled={isLoading || isGoogleLoading || isFacebookLoading}
            onClick={() => {
              loginWithProvider(AuthProvider.Google);
            }}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Conectați-vă prin Google
          </Button>
          <Button
            variant="bordered"
            type="button"
            disabled={isLoading || isGoogleLoading || isFacebookLoading}
            onClick={() => {
              loginWithProvider(AuthProvider.Facebook);
            }}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Conectați-vă prin Facebook
          </Button>
        </div>
      </form>
    </div>
  );
}
