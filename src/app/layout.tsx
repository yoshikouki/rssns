import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { MainNavigation } from "./main-navigation";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RSSNS - Modern RSS Reader",
  description:
    "A modern RSS news notification service to keep you updated with your favorite sources",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("h-full antialiased", inter.variable)}>
      <body className={cn(inter.className, "relative h-full bg-background font-sans")}>
        <MainNavigation />
        <main className="relative flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
