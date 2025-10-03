import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Microsoft User Group Power BI Club - Uttar Pradesh",
  description: "We are Microsoft Fabric User Group: Uttar Pradesh Power BI Club hub joining professionals, learners, and data enthusiasts emerging from Uttar Pradesh to around the globe. Our  goal is to empower individuals and organizations by unlocking the power of data through Power BI , Microsoft Fabric , AI/ML and other modern data tools & tech domains.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black overflow-x-hidden">
        <main>{children}</main>
      </body>
    </html>
  );
}