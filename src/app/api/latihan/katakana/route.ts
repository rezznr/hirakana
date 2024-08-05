import { NextResponse } from "next/server";

type Question = {
  id: string;
  question: string;
  options: string[];
  answer: string;
};

type Level = {
  level: number;
  questions: Question[];
};

type Data = {
  levels: Level[];
};

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateUniqueId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export async function GET() {
  const data = {
    levels: [
      {
        level: 1,
        questions: [
          {
            question: "Apa bacaan dari 'ア'?",
            options: ["a", "i", "u", "e"],
            answer: "a",
          },
          {
            question: "Apa bacaan dari 'イ'?",
            options: ["i", "a", "u", "e"],
            answer: "i",
          },
          {
            question: "Apa bacaan dari 'ウ'?",
            options: ["u", "a", "i", "e"],
            answer: "u",
          },
          {
            question: "Apa bacaan dari 'エ'?",
            options: ["e", "a", "i", "u"],
            answer: "e",
          },
          {
            question: "Apa bacaan dari 'オ'?",
            options: ["o", "a", "i", "e"],
            answer: "o",
          },
          {
            question: "Apa bacaan dari 'カ'?",
            options: ["ka", "ki", "ku", "ke"],
            answer: "ka",
          },
          {
            question: "Apa bacaan dari 'キ'?",
            options: ["ki", "ka", "ku", "ke"],
            answer: "ki",
          },
          {
            question: "Apa bacaan dari 'ク'?",
            options: ["ku", "ka", "ki", "ke"],
            answer: "ku",
          },
          {
            question: "Apa bacaan dari 'ケ'?",
            options: ["ke", "ka", "ki", "ku"],
            answer: "ke",
          },
          {
            question: "Apa bacaan dari 'コ'?",
            options: ["ko", "ka", "ki", "ku"],
            answer: "ko",
          },
          {
            question: "Apa bacaan dari 'サ'?",
            options: ["sa", "shi", "su", "se"],
            answer: "sa",
          },
          {
            question: "Apa bacaan dari 'シ'?",
            options: ["shi", "sa", "su", "se"],
            answer: "shi",
          },
          {
            question: "Apa bacaan dari 'ス'?",
            options: ["su", "sa", "shi", "se"],
            answer: "su",
          },
          {
            question: "Apa bacaan dari 'セ'?",
            options: ["se", "sa", "shi", "su"],
            answer: "se",
          },
          {
            question: "Apa bacaan dari 'ソ'?",
            options: ["so", "sa", "shi", "su"],
            answer: "so",
          },
        ],
      },
      {
        level: 2,
        questions: [
          {
            question: "Apa bacaan dari 'タ'?",
            options: ["ta", "chi", "tsu", "te"],
            answer: "ta",
          },
          {
            question: "Apa bacaan dari 'チ'?",
            options: ["chi", "ta", "tsu", "te"],
            answer: "chi",
          },
          {
            question: "Apa bacaan dari 'ツ'?",
            options: ["tsu", "ta", "chi", "te"],
            answer: "tsu",
          },
          {
            question: "Apa bacaan dari 'テ'?",
            options: ["te", "ta", "chi", "tsu"],
            answer: "te",
          },
          {
            question: "Apa bacaan dari 'ト'?",
            options: ["to", "ta", "chi", "tsu"],
            answer: "to",
          },
          {
            question: "Apa bacaan dari 'ナ'?",
            options: ["na", "ni", "nu", "ne"],
            answer: "na",
          },
          {
            question: "Apa bacaan dari 'ニ'?",
            options: ["ni", "na", "nu", "ne"],
            answer: "ni",
          },
          {
            question: "Apa bacaan dari 'ヌ'?",
            options: ["nu", "na", "ni", "ne"],
            answer: "nu",
          },
          {
            question: "Apa bacaan dari 'ネ'?",
            options: ["ne", "na", "ni", "nu"],
            answer: "ne",
          },
          {
            question: "Apa bacaan dari 'ノ'?",
            options: ["no", "na", "ni", "nu"],
            answer: "no",
          },
          {
            question: "Apa bacaan dari 'ハ'?",
            options: ["ha", "hi", "fu", "he"],
            answer: "ha",
          },
          {
            question: "Apa bacaan dari 'ヒ'?",
            options: ["hi", "ha", "fu", "he"],
            answer: "hi",
          },
          {
            question: "Apa bacaan dari 'フ'?",
            options: ["fu", "ha", "hi", "he"],
            answer: "fu",
          },
          {
            question: "Apa bacaan dari 'ヘ'?",
            options: ["he", "ha", "hi", "fu"],
            answer: "he",
          },
          {
            question: "Apa bacaan dari 'ホ'?",
            options: ["ho", "ha", "hi", "fu"],
            answer: "ho",
          },
        ],
      },
      {
        level: 3,
        questions: [
          {
            question: "Apa bacaan dari 'マ'?",
            options: ["ma", "mi", "mu", "me"],
            answer: "ma",
          },
          {
            question: "Apa bacaan dari 'ミ'?",
            options: ["mi", "ma", "mu", "me"],
            answer: "mi",
          },
          {
            question: "Apa bacaan dari 'ム'?",
            options: ["mu", "ma", "mi", "me"],
            answer: "mu",
          },
          {
            question: "Apa bacaan dari 'メ'?",
            options: ["me", "ma", "mi", "mu"],
            answer: "me",
          },
          {
            question: "Apa bacaan dari 'モ'?",
            options: ["mo", "ma", "mi", "mu"],
            answer: "mo",
          },
          {
            question: "Apa bacaan dari 'ヤ'?",
            options: ["ya", "yo", "yu", "ye"],
            answer: "ya",
          },
          {
            question: "Apa bacaan dari 'ユ'?",
            options: ["yu", "yo", "ya", "ye"],
            answer: "yu",
          },
          {
            question: "Apa bacaan dari 'ヨ'?",
            options: ["yo", "ya", "yu", "ye"],
            answer: "yo",
          },
          {
            question: "Apa bacaan dari 'ラ'?",
            options: ["ra", "ri", "ru", "re"],
            answer: "ra",
          },
          {
            question: "Apa bacaan dari 'リ'?",
            options: ["ri", "ra", "ru", "re"],
            answer: "ri",
          },
          {
            question: "Apa bacaan dari 'ル'?",
            options: ["ru", "ra", "ri", "re"],
            answer: "ru",
          },
          {
            question: "Apa bacaan dari 'レ'?",
            options: ["re", "ra", "ri", "ru"],
            answer: "re",
          },
          {
            question: "Apa bacaan dari 'ロ'?",
            options: ["ro", "ra", "ri", "ru"],
            answer: "ro",
          },
          {
            question: "Apa bacaan dari 'ワ'?",
            options: ["wa", "wo", "wi", "we"],
            answer: "wa",
          },
          {
            question: "Apa bacaan dari 'ヲ'?",
            options: ["wo", "wa", "wi", "we"],
            answer: "wo",
          },
        ],
      },
      {
        level: 4,
        questions: [
          {
            question: "Apa bacaan dari 'ン'?",
            options: ["n", "nu", "na", "ne"],
            answer: "n",
          },
          {
            question: "Apa bacaan dari 'ガ'?",
            options: ["ga", "ka", "gi", "gu"],
            answer: "ga",
          },
          {
            question: "Apa bacaan dari 'ギ'?",
            options: ["gi", "ga", "gu", "ge"],
            answer: "gi",
          },
          {
            question: "Apa bacaan dari 'グ'?",
            options: ["gu", "ga", "gi", "ge"],
            answer: "gu",
          },
          {
            question: "Apa bacaan dari 'ゲ'?",
            options: ["ge", "ga", "gi", "gu"],
            answer: "ge",
          },
          {
            question: "Apa bacaan dari 'ゴ'?",
            options: ["go", "ga", "gi", "gu"],
            answer: "go",
          },
          {
            question: "Apa bacaan dari 'ザ'?",
            options: ["za", "ji", "zu", "ze"],
            answer: "za",
          },
          {
            question: "Apa bacaan dari 'ジ'?",
            options: ["ji", "za", "zu", "ze"],
            answer: "ji",
          },
          {
            question: "Apa bacaan dari 'ズ'?",
            options: ["zu", "za", "ji", "ze"],
            answer: "zu",
          },
          {
            question: "Apa bacaan dari 'ゼ'?",
            options: ["ze", "za", "ji", "zu"],
            answer: "ze",
          },
          {
            question: "Apa bacaan dari 'ゾ'?",
            options: ["zo", "za", "ji", "zu"],
            answer: "zo",
          },
          {
            question: "Apa bacaan dari 'ダ'?",
            options: ["da", "ji", "zu", "de"],
            answer: "da",
          },
          {
            question: "Apa bacaan dari 'ヂ'?",
            options: ["ji", "da", "zu", "de"],
            answer: "ji",
          },
          {
            question: "Apa bacaan dari 'ヅ'?",
            options: ["zu", "da", "ji", "de"],
            answer: "zu",
          },
          {
            question: "Apa bacaan dari 'デ'?",
            options: ["de", "da", "ji", "zu"],
            answer: "de",
          },
          {
            question: "Apa bacaan dari 'ド'?",
            options: ["do", "da", "ji", "zu"],
            answer: "do",
          },
        ],
      },
      {
        level: 5,
        questions: [
          {
            question: "Apa bacaan dari 'バ'?",
            options: ["ba", "bi", "bu", "be"],
            answer: "ba",
          },
          {
            question: "Apa bacaan dari 'ビ'?",
            options: ["bi", "ba", "bu", "be"],
            answer: "bi",
          },
          {
            question: "Apa bacaan dari 'ブ'?",
            options: ["bu", "ba", "bi", "be"],
            answer: "bu",
          },
          {
            question: "Apa bacaan dari 'ベ'?",
            options: ["be", "ba", "bi", "bu"],
            answer: "be",
          },
          {
            question: "Apa bacaan dari 'ボ'?",
            options: ["bo", "ba", "bi", "bu"],
            answer: "bo",
          },
          {
            question: "Apa bacaan dari 'パ'?",
            options: ["pa", "pi", "pu", "pe"],
            answer: "pa",
          },
          {
            question: "Apa bacaan dari 'ピ'?",
            options: ["pi", "pa", "pu", "pe"],
            answer: "pi",
          },
          {
            question: "Apa bacaan dari 'プ'?",
            options: ["pu", "pa", "pi", "pe"],
            answer: "pu",
          },
          {
            question: "Apa bacaan dari 'ペ'?",
            options: ["pe", "pa", "pi", "pu"],
            answer: "pe",
          },
          {
            question: "Apa bacaan dari 'ポ'?",
            options: ["po", "pa", "pi", "pu"],
            answer: "po",
          },
          {
            question: "Apa bacaan dari 'キャ'?",
            options: ["kya", "kyo", "kyu", "ke"],
            answer: "kya",
          },
          {
            question: "Apa bacaan dari 'キュ'?",
            options: ["kyu", "kyo", "kya", "ke"],
            answer: "kyu",
          },
          {
            question: "Apa bacaan dari 'キョ'?",
            options: ["kyo", "kya", "kyu", "ke"],
            answer: "kyo",
          },
          {
            question: "Apa bacaan dari 'シャ'?",
            options: ["sha", "sho", "shu", "she"],
            answer: "sha",
          },
          {
            question: "Apa bacaan dari 'シュ'?",
            options: ["shu", "sho", "sha", "she"],
            answer: "shu",
          },
        ],
      },
      {
        level: 6,
        questions: [
          {
            question: "Apa bacaan dari 'ショ'?",
            options: ["sho", "sha", "shu", "she"],
            answer: "sho",
          },
          {
            question: "Apa bacaan dari 'チャ'?",
            options: ["cha", "cho", "chu", "che"],
            answer: "cha",
          },
          {
            question: "Apa bacaan dari 'チュ'?",
            options: ["chu", "cho", "cha", "che"],
            answer: "chu",
          },
          {
            question: "Apa bacaan dari 'チョ'?",
            options: ["cho", "cha", "chu", "che"],
            answer: "cho",
          },
          {
            question: "Apa bacaan dari 'ニャ'?",
            options: ["nya", "nyo", "nyu", "ne"],
            answer: "nya",
          },
          {
            question: "Apa bacaan dari 'ニュ'?",
            options: ["nyu", "nyo", "nya", "ne"],
            answer: "nyu",
          },
          {
            question: "Apa bacaan dari 'ニョ'?",
            options: ["nyo", "nya", "nyu", "ne"],
            answer: "nyo",
          },
          {
            question: "Apa bacaan dari 'ヒャ'?",
            options: ["hya", "hyo", "hyu", "he"],
            answer: "hya",
          },
          {
            question: "Apa bacaan dari 'ヒュ'?",
            options: ["hyu", "hyo", "hya", "he"],
            answer: "hyu",
          },
          {
            question: "Apa bacaan dari 'ヒョ'?",
            options: ["hyo", "hya", "hyu", "he"],
            answer: "hyo",
          },
          {
            question: "Apa bacaan dari 'ミャ'?",
            options: ["mya", "myo", "myu", "me"],
            answer: "mya",
          },
          {
            question: "Apa bacaan dari 'ミュ'?",
            options: ["myu", "myo", "mya", "me"],
            answer: "myu",
          },
          {
            question: "Apa bacaan dari 'ミョ'?",
            options: ["myo", "mya", "myu", "me"],
            answer: "myo",
          },
          {
            question: "Apa bacaan dari 'リャ'?",
            options: ["rya", "ryo", "ryu", "re"],
            answer: "rya",
          },
          {
            question: "Apa bacaan dari 'リュ'?",
            options: ["ryu", "ryo", "rya", "re"],
            answer: "ryu",
          },
        ],
      },
      {
        level: 7,
        questions: [
          {
            question: "Apa bacaan dari 'リョ'?",
            options: ["ryo", "rya", "ryu", "re"],
            answer: "ryo",
          },
          {
            question: "Apa bacaan dari 'ギャ'?",
            options: ["gya", "gyo", "gyu", "ge"],
            answer: "gya",
          },
          {
            question: "Apa bacaan dari 'ギュ'?",
            options: ["gyu", "gyo", "gya", "ge"],
            answer: "gyu",
          },
          {
            question: "Apa bacaan dari 'ギョ'?",
            options: ["gyo", "gya", "gyu", "ge"],
            answer: "gyo",
          },
          {
            question: "Apa bacaan dari 'ジャ'?",
            options: ["ja", "jo", "ju", "je"],
            answer: "ja",
          },
          {
            question: "Apa bacaan dari 'ジュ'?",
            options: ["ju", "jo", "ja", "je"],
            answer: "ju",
          },
          {
            question: "Apa bacaan dari 'ジョ'?",
            options: ["jo", "ja", "ju", "je"],
            answer: "jo",
          },
          {
            question: "Apa bacaan dari 'ビャ'?",
            options: ["bya", "byo", "byu", "be"],
            answer: "bya",
          },
          {
            question: "Apa bacaan dari 'ビュ'?",
            options: ["byu", "byo", "bya", "be"],
            answer: "byu",
          },
          {
            question: "Apa bacaan dari 'ビョ'?",
            options: ["byo", "bya", "byu", "be"],
            answer: "byo",
          },
          {
            question: "Apa bacaan dari 'ピャ'?",
            options: ["pya", "pyo", "pyu", "pe"],
            answer: "pya",
          },
          {
            question: "Apa bacaan dari 'ピュ'?",
            options: ["pyu", "pyo", "pya", "pe"],
            answer: "pyu",
          },
          {
            question: "Apa bacaan dari 'ピョ'?",
            options: ["pyo", "pya", "pyu", "pe"],
            answer: "pyo",
          },
          {
            question: "Apa bacaan dari 'ァ'?",
            options: ["a", "i", "u", "e"],
            answer: "a",
          },
          {
            question: "Apa bacaan dari 'ィ'?",
            options: ["i", "a", "u", "e"],
            answer: "i",
          },
        ],
      },
      {
        level: 8,
        questions: [
          {
            question: "Apa bacaan dari 'ゥ'?",
            options: ["u", "a", "i", "e"],
            answer: "u",
          },
          {
            question: "Apa bacaan dari 'ェ'?",
            options: ["e", "a", "i", "u"],
            answer: "e",
          },
          {
            question: "Apa bacaan dari 'ォ'?",
            options: ["o", "a", "i", "e"],
            answer: "o",
          },
          {
            question: "Apa bacaan dari 'ニャ'?",
            options: ["nya", "na", "ni", "nyu"],
            answer: "nya",
          },
          {
            question: "Apa bacaan dari 'ヴァ'?",
            options: ["va", "vi", "vu", "ve"],
            answer: "va",
          },
          {
            question: "Apa bacaan dari 'ヴィ'?",
            options: ["vi", "va", "vu", "ve"],
            answer: "vi",
          },
          {
            question: "Apa bacaan dari 'ヴ'?",
            options: ["vu", "va", "vi", "ve"],
            answer: "vu",
          },
          {
            question: "Apa bacaan dari 'ヴェ'?",
            options: ["ve", "va", "vi", "vu"],
            answer: "ve",
          },
          {
            question: "Apa bacaan dari 'ヴォ'?",
            options: ["vo", "va", "vi", "vu"],
            answer: "vo",
          },
          {
            question: "Apa bacaan dari 'シェ'?",
            options: ["she", "sha", "shu", "sho"],
            answer: "she",
          },
          {
            question: "Apa bacaan dari 'ジェ'?",
            options: ["je", "ja", "ju", "jo"],
            answer: "je",
          },
          {
            question: "Apa bacaan dari 'チェ'?",
            options: ["che", "cha", "chu", "cho"],
            answer: "che",
          },
          {
            question: "Apa bacaan dari 'ツァ'?",
            options: ["tsa", "tsi", "tsu", "tse"],
            answer: "tsa",
          },
          {
            question: "Apa bacaan dari 'ツィ'?",
            options: ["tsi", "tsa", "tsu", "tse"],
            answer: "tsi",
          },
          {
            question: "Apa bacaan dari 'ツェ'?",
            options: ["tse", "tsa", "tsi", "tsu"],
            answer: "tse",
          },
        ],
      },
    ],
  };

  data.levels = data.levels.map((level) => ({
    ...level,
    questions: shuffleArray(
      level.questions.map((question) => ({
        ...question,
        id: generateUniqueId(),
        options: shuffleArray(question.options),
      }))
    ),
  }));

  return NextResponse.json(data);
}
