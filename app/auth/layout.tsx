import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main
      className={cn(
        "flex flex-col items-center justify-center gap-10 w-full h-screen",
        "min-h-max px-6 py-10",
      )}
    >
      <Link href="/" className="block w-full max-w-50">
        <div className="flex-1 flex justify-center items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex justify-center items-center">
            D
          </div>
          <h1 className="group-data-[state=collapsed]:hidden">
            DayoTec Tecnologias
          </h1>
        </div>
      </Link>
      {children}
    </main>
  );
}
