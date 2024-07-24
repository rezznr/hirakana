export const runtime = "nodejs";

import Link from "next/link";
export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-[calc(100vh-6rem)] lg:h-[calc(100vh-7rem)] gap-4 grow text-black">
      <h2 className="text-3xl font-bold text-center md:text-5xl">
        404 Tidak Ditemukan
      </h2>
      <p className="text-center md:text-xl">
        Halaman yang kamu cari tidak ada.
      </p>
      <p className="text-center md:text-xl">
        Kembali ke{" "}
        <Link
          className="transition-all hover:underline hover:text-black"
          href="/"
        >
          Halaman Awal
        </Link>
      </p>
    </main>
  );
}
