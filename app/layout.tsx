import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HUBshop – Saffron & Salt",
  description: "HUBshop admin web app (DS assignment starter)",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full bg-[#0a0a0a]">
        <Topbar />
        <Suspense fallback={null}>
          <Sidebar />
        </Suspense>
        <main className="ml-[260px] mt-14 min-h-[calc(100vh-56px)] rounded-tl-[14px] bg-[#f1f1f1]">{children}</main>
      </body>
    </html>
  );
}
