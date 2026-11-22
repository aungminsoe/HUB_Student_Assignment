import type { Metadata } from "next";
import { Lato, Nunito } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";

const lato = Lato({ variable: "--font-lato", subsets: ["latin"], weight: ["100", "300", "400", "700", "900"], style: ["normal", "italic"] });
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HUBshop – Saffron & Salt",
  description: "HUBshop admin web app (DS assignment starter)",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lato.variable} ${nunito.variable} h-full`}>
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
