import React from "react";

export const metadata = {
  title: "Hirakana | Belajar",
};

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center items-center max-w-7xl">{children}</div>
  );
}

export default Layout;
