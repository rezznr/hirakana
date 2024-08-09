"use client";
import React, { useEffect, useState } from "react";
import { KatakanaData, KatakanaRow } from "@/types/katakanaLearn.data";
import katakanaDataJson from "./katakana.json";
import Loading from "@/app/loading";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

const LearnKatakana = () => {
  const [katakanaData, setKatakanaData] = useState<KatakanaData | null>(null);

  useEffect(() => {
    setKatakanaData(katakanaDataJson);
  }, []);

  if (!katakanaData) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-red-200 pb-10">
      <Link
        className="flex justify-start items-center hover:underline text-red-500 text-lg mb-4"
        href={"/belajar"}
      >
        <IoMdArrowRoundBack className="text-2xl" />
        <p className="text-xl">Back</p>
      </Link>
      <div className="bg-white shadow-lg max-w-4xl mx-auto p-8 rounded-lg">
        <h1 className="font-bold mb-4 text-center text-2xl md:text-4xl text-red-500">
          Belajar Katakana
        </h1>
        <p className="mb-8 text-xl text-center text-gray-700">
          Katakana adalah salah satu dari tiga sistem penulisan utama dalam
          bahasa Jepang. Katakana digunakan terutama untuk kata-kata serapan
          dari bahasa asing, nama-nama non-Jepang, serta nama perusahaan dan
          kata-kata onomatope. Pelajari huruf-huruf Katakana dengan tabel di
          bawah ini.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Tabel Huruf Katakana Dasar
          </h2>
          <TableKatakana data={katakanaData.katakana} />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Tabel Huruf Dakuon
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            {`Dakuon dalam Katakana adalah varian dari beberapa huruf yang
            ditambahkan tanda diakritik (゛) untuk mengubah bunyi konsonan yang
            lebih keras. Dakuon mengubah bunyi seperti "k" menjadi "g", "s" 
            menjadi "z", "t" menjadi "d", dan "h" menjadi "b".`}
          </p>
          <TableKatakana data={katakanaData.dakuon} />
          <p className="text-gray-700 text-lg mt-4">
            Contoh penggunaan Dakuon dalam kata-kata:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg ml-4">
            <li>ガラス (garasu, kaca)</li>
            <li>テレビ (terebi, televisi)</li>
            <li>バッグ (baggu, tas)</li>
            <li>ベッド (beddo, tempat tidur)</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Tabel Huruf Han-dakuon
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            {`Han-dakuon dalam Katakana adalah varian dari huruf-huruf yang dimulai
            dengan konsonan "h", yang diubah dengan menambahkan tanda bulat kecil
            (゜) untuk menghasilkan bunyi "p".`}
          </p>
          <TableKatakana data={katakanaData.handakuon} />
          <p className="text-gray-700 text-lg mt-4">
            Contoh penggunaan Han-dakuon dalam kata-kata:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg ml-4">
            <li>パン (pan, roti)</li>
            <li>ピザ (piza, pizza)</li>
            <li>ペン (pen, pena)</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Perpaduan Katakana (Yōon)
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            {`Yōon adalah kombinasi dari Katakana "i" baris dengan ヤ (ya), ユ (yu),
            atau ヨ (yo) yang ditulis lebih kecil, menghasilkan bunyi yang
            digabungkan seperti "kya", "shu", "cho", dan lain-lain.`}
          </p>
          <TableKatakana data={katakanaData.yoon} isYoon={true} />
          <p className="text-gray-700 text-lg mt-4">
            Contoh penggunaan Yōon dalam kata-kata:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg ml-4">
            <li>キャリア (kyaria, karir)</li>
            <li>シャツ (shatsu, kemeja)</li>
            <li>ジュース (juusu, jus)</li>
            <li>チョコレート (chokoreeto, cokelat)</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Penggunaan ッ (Tsu Kecil)
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            {`Huruf ッ (tsu kecil) dalam Katakana digunakan untuk menunjukkan
            perpanjangan konsonan yang mengikutinya. Misalnya, "バッグ" (baggu,
            tas) diucapkan dengan dua "g". Penggunaan ッ membuat pengucapan lebih
            tepat dalam bahasa Jepang.`}
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg ml-4">
            <li>カップ (kappu, cangkir)</li>
            <li>キット (kitto, kit)</li>
            <li>サッカー (sakkaa, sepak bola)</li>
            <li>ペット (petto, hewan peliharaan)</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Penggunaan Garis Panjang (ー)
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            {`Dalam Katakana, garis panjang (ー) digunakan untuk memperpanjang
            bunyi vokal yang mendahuluinya. Ini sangat umum dalam kata-kata
            serapan dari bahasa asing. Garis ini membantu pengucapan yang lebih
            akurat dari bunyi asli kata tersebut.`}
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg ml-4">
            <li>コーヒー (koohii, kopi)</li>
            <li>ケーキ (keeki, kue)</li>
            <li>サッカー (sakkaa, sepak bola)</li>
            <li>タクシー (takushii, taksi)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Penggunaan Katakana
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Katakana digunakan terutama untuk kata-kata yang berasal dari bahasa
            asing, nama-nama orang dan tempat di luar Jepang, istilah teknis dan
            ilmiah, nama perusahaan, serta kata-kata onomatope. Berikut adalah
            beberapa contoh penggunaan Katakana dalam kata-kata sehari-hari:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-lg ml-4">
            <li>コンピュータ (konpyuuta, komputer)</li>
            <li>アイスクリーム (aisukuriimu, es krim)</li>
            <li>ホテル (hoteru, hotel)</li>
            <li>ビール (biiru, bir)</li>
            <li>ワイン (wain, anggur)</li>
            <li>メール (meeru, email)</li>
            <li>ゲーム (geemu, game)</li>
            <li>スキー (sukii, ski)</li>
            <li>テニス (tenisu, tenis)</li>
          </ul>
        </div>
        <div className="mt-12">
          <h2 className="font-bold text-2xl text-red-500 mb-6 text-center">
            Lanjutkan Pembelajaran
          </h2>
          <div className="flex justify-center space-x-4">
            <Link href="/belajar/hiragana">
              <p className="bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 rounded-lg text-lg transition-colors">
                Belajar Hiragana
              </p>
            </Link>
            <Link href="/latihan">
              <p className="bg-green-300 hover:bg-green-500 text-white py-2 px-4 rounded-lg text-lg transition-colors">
                Latihan
              </p>
            </Link>
            <Link href="/quiz">
              <p className="bg-red-300 hover:bg-red-500 text-white py-2 px-4 rounded-lg text-lg transition-colors">
                Ikuti Kuis
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TableKatakanaProps {
  data: KatakanaRow[];
  isYoon?: boolean;
}

const TableKatakana: React.FC<TableKatakanaProps> = ({ data, isYoon }) => {
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
                className="bg-red-300 p-2 text-black text-xl font-bold md:border md:border-red-300 hidden md:table-cell"
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
                      {row.characters[colIndex].katakana} <br />
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

export { LearnKatakana };
