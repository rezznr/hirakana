import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="" lang="id">
      <body className={inter.className}>
        <Navbar />
        <div className="flex min-h-screen justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
