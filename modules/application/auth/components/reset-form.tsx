"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { ForgotPasswordSchema } from "@/lib/validations/auth";
import { cn } from "@/lib/cn";
import {
  AuthErrorMessage,
  checkErrorMessage,
} from "@/lib/validations/error-check";
import { createClient } from "@/utils/supabase/create-client";
import { Button } from "@nextui-org/button";
import { Icons } from "@/components/icons/icons";
import { toast } from "@/components/shared/toast/use-toast";
import { Input } from "@nextui-org/react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof ForgotPasswordSchema>;

export function UserResetPasswordForm({
  className,
  ...props
}: UserAuthFormProps) {
  const [emailValue, setEmailValue] = React.useState("");
  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (emailValue === "") return false;

    return !validateEmail(emailValue);
  }, [emailValue]);
  const supabase = createClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(ForgotPasswordSchema) });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(data: FormData) {
    const email = data.email.toLowerCase();
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);

      setIsLoading(false);

      if (!error) {
        return toast({
          title: AuthErrorMessage.ResetPassword.title,
          description: AuthErrorMessage.ResetPassword.description,
          variant: AuthErrorMessage.ResetPassword.variant,
        });
      }

      if (error) {
        const errorToast = checkErrorMessage(error);
        return toast(errorToast);
      }
    } catch (error: any) {
      console.log("Error thrown:", error.message);

      const errorToast = checkErrorMessage(error);
      return toast(errorToast);
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
              placeholder="jon@domain.com"
              type="email"
              label="Email"
              value={emailValue}
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              variant="bordered"
              disabled={isLoading}
              {...register("email")}
              color={isInvalid ? "danger" : "default"}
              isInvalid={isInvalid}
              onValueChange={setEmailValue}
              errorMessage={errors?.email?.message}
            />
          </div>

          <Button disabled={isLoading} type={"submit"} color={"primary"}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Reset Password
          </Button>
        </div>
      </form>
    </div>
  );
}
