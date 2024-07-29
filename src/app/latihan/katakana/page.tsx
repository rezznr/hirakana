// app/latihan/hiragana/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { Latihan } from "./_partials/latihan";

const LatihanPage = () => {
  const router = useRouter();

  const handleSelectLevel = (level: number) => {
    router.push(`/latihan/katakana/level/${level}`);
  };

  return <Latihan onSelectLevel={handleSelectLevel} />;
};

export default LatihanPage;
