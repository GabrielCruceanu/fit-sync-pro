import { AuthType } from "@/ts/enum";
import { cn } from "@nextui-org/react";

export default function HeaderForm({
  authType,
  quote,
  author,
}: {
  authType: AuthType;
  quote: string;
  author: string;
}) {
  return (
    <div className="relative flex p-4 md:px-8 h-full flex-col bg-muted lg:p-10 text-white lg:flex lg:dark:border-r lg:dark:border-default">
      <div
        className={cn(
          `absolute inset-0 bg-zinc-900 bg-opacity-60 bg-cover bg-center bg-no-repeat bg-blend-multiply`,
          authType === AuthType.Login
            ? "bg-[url('/images/auth/login.jpg')]"
            : authType === AuthType.Register
              ? "bg-[url('/images/auth/signup.jpg')]"
              : "bg-[url('/images/auth/forgot-password.jpg')]",
        )}
      />
      <div className="relative z-20 flex items-center text-lg font-medium">
        Fit<span className="text-primary">Sync</span>
      </div>
      <div className="relative z-20 mt-auto">
        <blockquote className="space-y-2">
          <p className="text-lg">&ldquo;{quote}&rdquo;</p>
          <footer className="text-sm">{author}</footer>
        </blockquote>
      </div>
    </div>
  );
}
