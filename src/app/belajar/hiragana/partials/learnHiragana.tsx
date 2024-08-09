"use client";
import React, { useEffect, useState } from "react";
import { HiraganaData, HiraganaRow } from "@/types/hiraganaLearn.data";
import hiraganaDataJson from "./hiragana.json";
import Loading from "@/app/loading";

const LearnHiragana = () => {
  const [hiraganaData, setHiraganaData] = useState<HiraganaData | null>(null);

  useEffect(() => {
    setHiraganaData(hiraganaDataJson);
  }, []);

  if (!hiraganaData) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-red-200 py-10">
      <div className="bg-white shadow-lg max-w-4xl mx-auto p-8 rounded-lg">
        <h1 className="font-bold mb-4 text-center text-2xl md:text-4xl text-red-500">
          Belajar Hiragana
        </h1>
        <p className="mb-8 text-xl text-center text-gray-700">
          Hiragana adalah salah satu dari tiga sistem penulisan utama dalam
          bahasa Jepang. Pelajari huruf-huruf Hiragana dengan tabel di bawah
          ini.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Tabel Huruf Hiragana Dasar
          </h2>
          <TableHiragana data={hiraganaData.hiragana} />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Tabel Huruf Dakuon
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            {`Dakuon adalah varian dari beberapa huruf Hiragana yang ditambahkan
            tanda diakritik (゛) untuk mengubah bunyi konsonan yang lebih keras.
            Dakuon mengubah bunyi seperti "k" menjadi "g", "s" menjadi "z", "t"
            menjadi "d", dan "h" menjadi "b".`}
          </p>
          <TableHiragana data={hiraganaData.dakuon} />
          <p className="text-gray-700 text-lg mt-4">
            Contoh penggunaan Dakuon dalam kalimat:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg ml-4">
            <li>がっこう (gakkou, sekolah)</li>
            <li>かぜ (kaze, angin)</li>
            <li>おとこ (otoko, laki-laki)</li>
            <li>ぶた (buta, babi)</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Tabel Huruf Han-dakuon
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            {`Han-dakuon adalah varian dari huruf-huruf yang dimulai dengan konsonan
            "h", yang diubah dengan menambahkan tanda bulat kecil (゜) untuk
            menghasilkan bunyi "p". Han-dakuon mengubah bunyi seperti "h" menjadi
            "p".`}
          </p>
          <TableHiragana data={hiraganaData.handakuon} />
          <p className="text-gray-700 text-lg mt-4">
            Contoh penggunaan Han-dakuon dalam kalimat:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg ml-4">
            <li>ぴかぴか (pikapika, berkilau)</li>
            <li>ぺこぺこ (pekopeko, lapar)</li>
            <li>いっぱい (ippai, penuh)</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Perpaduan Hiragana (Yōon)
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            {`Yōon adalah kombinasi dari Hiragana "i" baris dengan や (ya), ゆ (yu),
            atau よ (yo) yang ditulis lebih kecil, menghasilkan bunyi yang
            digabungkan seperti "kya", "shu", "cho", dan lain-lain.`}
          </p>
          <TableHiragana data={hiraganaData.yoon} isYoon={true} />
          <p className="text-gray-700 text-lg mt-4">
            Contoh penggunaan Yōon dalam kalimat:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg ml-4">
            <li>きゃく (kyaku, tamu)</li>
            <li>しゃしん (shashin, foto)</li>
            <li>じゅう (juu, sepuluh)</li>
            <li>
              {`ちょう (chou, panjang, atau sebagai awalan untuk arti "super")`}
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Penggunaan っ (Tsu Kecil)
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            {`Huruf っ (tsu kecil) digunakan untuk menunjukkan perpanjangan konsonan yang
            mengikutinya. Misalnya, "がっこう" (gakkou, sekolah) diucapkan dengan dua "k".
            Penggunaan っ membuat pengucapan lebih tepat dalam bahasa Jepang.`}
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg ml-4">
            <li>きって (kitte, perangko)</li>
            <li>ざっし (zasshi, majalah)</li>
            <li>はっぱ (happa, daun)</li>
            <li>さっか (sakka, penulis)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Penggunaan Hiragana
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Hiragana digunakan untuk menulis kata-kata asli Jepang, partikel
            tata bahasa, dan infleksi kata kerja serta kata sifat. Berikut
            adalah beberapa contoh penggunaan Hiragana dalam kalimat
            sehari-hari:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg ml-4">
            <li>さくら (sakura, bunga sakura)</li>
            <li>かわいい (kawaii, lucu)</li>
            <li>たべます (tabemasu, makan)</li>
            <li>ねこがいます (neko ga imasu, ada kucing)</li>
            <li>すしをたべたい (sushi o tabetai, ingin makan sushi)</li>
            <li>
              きょうはあついですね (kyou wa atsui desu ne, hari ini panas ya)
            </li>
            <li>
              ともだちとあそびます (tomodachi to asobimasu, bermain dengan
              teman)
            </li>
            <li>
              わたしはがくせいです (watashi wa gakusei desu, saya adalah seorang
              pelajar)
            </li>
            <li>ほんをよみます (hon o yomimasu, membaca buku)</li>
            <li>おはようございます (ohayou gozaimasu, selamat pagi)</li>
            <li>すみません (sumimasen, maaf atau permisi)</li>
            <li>ありがとう (arigatou, terima kasih)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

interface TableHiraganaProps {
  data: HiraganaRow[];
  isYoon?: boolean;
}

const TableHiragana: React.FC<TableHiraganaProps> = ({ data, isYoon }) => {
  // Define headers for Yōon specifically
  const yoonHeaders = ["A", "U", "O"];
  const basicHeaders = ["A", "I", "U", "E", "O"];

  // Choose headers based on whether it is Yōon
  const headers = isYoon ? yoonHeaders : basicHeaders;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-red-300 md:border-none block md:table-row">
            <th className="bg-red-300 p-2 text-black text-xl font-bold md:border md:border-red-300 block md:table-cell">
              {" "}
            </th>
            {headers.map((header, index) => (
              <th
                key={index}
                className="bg-red-300 p-2 text-black text-xl font-bold md:border md:border-red-300 block md:table-cell"
              >
                {header.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="bg-white/50 border border-red-200 md:border-none block md:table-row"
            >
              <td className="p-2 md:border md:border-red-300 text-center font-bold text-black text-xl block md:table-cell">
                {row.row}
              </td>
              {headers.map((_, colIndex) => (
                <td
                  key={colIndex}
                  className="p-2 md:border md:border-red-300 text-center block md:table-cell"
                >
                  {row.characters[colIndex] ? (
                    <div className="text-xl">
                      {row.characters[colIndex].hiragana} <br />
                      {row.characters[colIndex].romaji ? (
                        <span className="text-gray-700">
                          ({row.characters[colIndex].romaji})
                        </span>
                      ) : (
                        <span className="text-gray-700 font-bold">-</span>
                      )}
                    </div>
                  ) : (
                    <span className="text-gray-700 font-bold">-</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { LearnHiragana };
