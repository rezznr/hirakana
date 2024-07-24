export const runtime = "nodejs";

import Link from "next/link";
export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-center h-[calc(100vh-6rem)] lg:h-[calc(100vh-7rem)] gap-4 grow text-black">
      <h2 className="text-3xl font-bold text-center md:text-5xl">Loading...</h2>
    </main>
  );
}
