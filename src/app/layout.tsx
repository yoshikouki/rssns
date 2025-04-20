import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { MainNavigation } from "./main-navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RSSNS",
  description: "RSS News Notification Service",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(inter.className, "h-full")}>
        <MainNavigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
