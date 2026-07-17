import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg",

    secondary:
      "border border-slate-300 bg-white text-slate-800 hover:border-blue-600 hover:text-blue-600",
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}