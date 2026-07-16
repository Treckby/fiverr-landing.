import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiverr Landing",
  description: "Professional Landing Pages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}