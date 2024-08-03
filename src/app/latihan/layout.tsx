import React from "react";

export const metadata = {
  title: "Hirakana | Latihan",
};

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex justify-center items-center">{children}</div>;
}

export default Layout;
