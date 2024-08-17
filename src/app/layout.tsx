import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { SakuraAnimation } from "@/components/sakura/sakuraAnimation";
import AutoPlayAudio from "@/components/audioPlay/audioPlay";
import { Component } from "@/components/component/component";
import Head from "next/head";
// import { GlobalStateProvider } from "./globalStateContext";

const poppins = Poppins({ weight: ["300", "400"], subsets: ["latin"] });

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
      <Head>
        <link
          rel="preload"
          as="image"
          href="../../public/assets/img/background.png"
        />
      </Head>
      <body className={poppins.className}>
        <Navbar />
        <Component />
        <AutoPlayAudio />
        <SakuraAnimation />
        <div className="flex items-center justify-center pb-10">{children}</div>
      </body>
      {/* </GlobalStateProvider> */}
    </html>
  );
}
