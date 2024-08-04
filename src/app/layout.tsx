import type { Metadata } from "next";
import { Poppins, Potta_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
// import { GlobalStateProvider } from "./globalStateContext";

const poppins = Poppins({ weight: ["300", "400"], subsets: ["latin"] });
const pottaOne = Potta_One({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hirakana",
  description:
    "Aplikasi Media Pembelajaran Huruf Hiragana dan Katakan Bahasa Jepang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      {/* <GlobalStateProvider> */}
      <body className={poppins.className || pottaOne.className}>
        <Navbar />
        <div className="flex items-center justify-center pb-10">{children}</div>
      </body>
      {/* </GlobalStateProvider> */}
    </html>
  );
}
