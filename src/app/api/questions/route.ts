import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    levels: [
      {
        level: 1,
        questions: [
          {
            question: "Apa bacaan dari 'あ'?",
            options: ["a", "i", "u", "e"],
            answer: "a",
          },
          {
            question: "Apa bacaan dari 'い'?",
            options: ["i", "a", "u", "e"],
            answer: "i",
          },
          {
            question: "Apa bacaan dari 'う'?",
            options: ["u", "a", "i", "e"],
            answer: "u",
          },
          {
            question: "Apa bacaan dari 'え'?",
            options: ["e", "a", "i", "u"],
            answer: "e",
          },
          {
            question: "Apa bacaan dari 'お'?",
            options: ["o", "a", "i", "e"],
            answer: "o",
          },
          {
            question: "Apa bacaan dari 'か'?",
            options: ["ka", "ki", "ku", "ke"],
            answer: "ka",
          },
          {
            question: "Apa bacaan dari 'き'?",
            options: ["ki", "ka", "ku", "ke"],
            answer: "ki",
          },
          {
            question: "Apa bacaan dari 'く'?",
            options: ["ku", "ka", "ki", "ke"],
            answer: "ku",
          },
          {
            question: "Apa bacaan dari 'け'?",
            options: ["ke", "ka", "ki", "ku"],
            answer: "ke",
          },
          {
            question: "Apa bacaan dari 'こ'?",
            options: ["ko", "ka", "ki", "ku"],
            answer: "ko",
          },
          {
            question: "Apa bacaan dari 'さ'?",
            options: ["sa", "shi", "su", "se"],
            answer: "sa",
          },
          {
            question: "Apa bacaan dari 'し'?",
            options: ["shi", "sa", "su", "se"],
            answer: "shi",
          },
          {
            question: "Apa bacaan dari 'す'?",
            options: ["su", "sa", "shi", "se"],
            answer: "su",
          },
          {
            question: "Apa bacaan dari 'せ'?",
            options: ["se", "sa", "shi", "su"],
            answer: "se",
          },
          {
            question: "Apa bacaan dari 'そ'?",
            options: ["so", "sa", "shi", "su"],
            answer: "so",
          },
        ],
      },
      {
        level: 2,
        questions: [
          {
            question: "Apa bacaan dari 'た'?",
            options: ["ta", "chi", "tsu", "te"],
            answer: "ta",
          },
          {
            question: "Apa bacaan dari 'ち'?",
            options: ["chi", "ta", "tsu", "te"],
            answer: "chi",
          },
          {
            question: "Apa bacaan dari 'つ'?",
            options: ["tsu", "ta", "chi", "te"],
            answer: "tsu",
          },
          {
            question: "Apa bacaan dari 'て'?",
            options: ["te", "ta", "chi", "tsu"],
            answer: "te",
          },
          {
            question: "Apa bacaan dari 'と'?",
            options: ["to", "ta", "chi", "tsu"],
            answer: "to",
          },
          {
            question: "Apa bacaan dari 'な'?",
            options: ["na", "ni", "nu", "ne"],
            answer: "na",
          },
          {
            question: "Apa bacaan dari 'に'?",
            options: ["ni", "na", "nu", "ne"],
            answer: "ni",
          },
          {
            question: "Apa bacaan dari 'ぬ'?",
            options: ["nu", "na", "ni", "ne"],
            answer: "nu",
          },
          {
            question: "Apa bacaan dari 'ね'?",
            options: ["ne", "na", "ni", "nu"],
            answer: "ne",
          },
          {
            question: "Apa bacaan dari 'の'?",
            options: ["no", "na", "ni", "nu"],
            answer: "no",
          },
          {
            question: "Apa bacaan dari 'は'?",
            options: ["ha", "hi", "fu", "he"],
            answer: "ha",
          },
          {
            question: "Apa bacaan dari 'ひ'?",
            options: ["hi", "ha", "fu", "he"],
            answer: "hi",
          },
          {
            question: "Apa bacaan dari 'ふ'?",
            options: ["fu", "ha", "hi", "he"],
            answer: "fu",
          },
          {
            question: "Apa bacaan dari 'へ'?",
            options: ["he", "ha", "hi", "fu"],
            answer: "he",
          },
          {
            question: "Apa bacaan dari 'ほ'?",
            options: ["ho", "ha", "hi", "fu"],
            answer: "ho",
          },
        ],
      },
      {
        level: 3,
        questions: [
          {
            question: "Apa bacaan dari 'ま'?",
            options: ["ma", "mi", "mu", "me"],
            answer: "ma",
          },
          {
            question: "Apa bacaan dari 'み'?",
            options: ["mi", "ma", "mu", "me"],
            answer: "mi",
          },
          {
            question: "Apa bacaan dari 'む'?",
            options: ["mu", "ma", "mi", "me"],
            answer: "mu",
          },
          {
            question: "Apa bacaan dari 'め'?",
            options: ["me", "ma", "mi", "mu"],
            answer: "me",
          },
          {
            question: "Apa bacaan dari 'も'?",
            options: ["mo", "ma", "mi", "mu"],
            answer: "mo",
          },
          {
            question: "Apa bacaan dari 'や'?",
            options: ["ya", "yo", "yu", "ye"],
            answer: "ya",
          },
          {
            question: "Apa bacaan dari 'ゆ'?",
            options: ["yu", "yo", "ya", "ye"],
            answer: "yu",
          },
          {
            question: "Apa bacaan dari 'よ'?",
            options: ["yo", "ya", "yu", "ye"],
            answer: "yo",
          },
          {
            question: "Apa bacaan dari 'ら'?",
            options: ["ra", "ri", "ru", "re"],
            answer: "ra",
          },
          {
            question: "Apa bacaan dari 'り'?",
            options: ["ri", "ra", "ru", "re"],
            answer: "ri",
          },
          {
            question: "Apa bacaan dari 'る'?",
            options: ["ru", "ra", "ri", "re"],
            answer: "ru",
          },
          {
            question: "Apa bacaan dari 'れ'?",
            options: ["re", "ra", "ri", "ru"],
            answer: "re",
          },
          {
            question: "Apa bacaan dari 'ろ'?",
            options: ["ro", "ra", "ri", "ru"],
            answer: "ro",
          },
          {
            question: "Apa bacaan dari 'わ'?",
            options: ["wa", "wo", "wi", "we"],
            answer: "wa",
          },
          {
            question: "Apa bacaan dari 'を'?",
            options: ["wo", "wa", "wi", "we"],
            answer: "wo",
          },
        ],
      },
      {
        level: 4,
        questions: [
          {
            question: "Apa bacaan dari 'ん'?",
            options: ["n", "nu", "na", "ne"],
            answer: "n",
          },
          {
            question: "Apa bacaan dari 'が'?",
            options: ["ga", "ka", "gi", "gu"],
            answer: "ga",
          },
          {
            question: "Apa bacaan dari 'ぎ'?",
            options: ["gi", "ga", "gu", "ge"],
            answer: "gi",
          },
          {
            question: "Apa bacaan dari 'ぐ'?",
            options: ["gu", "ga", "gi", "ge"],
            answer: "gu",
          },
          {
            question: "Apa bacaan dari 'げ'?",
            options: ["ge", "ga", "gi", "gu"],
            answer: "ge",
          },
          {
            question: "Apa bacaan dari 'ご'?",
            options: ["go", "ga", "gi", "gu"],
            answer: "go",
          },
          {
            question: "Apa bacaan dari 'ざ'?",
            options: ["za", "sa", "ji", "zu"],
            answer: "za",
          },
          {
            question: "Apa bacaan dari 'じ'?",
            options: ["ji", "sa", "zu", "ze"],
            answer: "ji",
          },
          {
            question: "Apa bacaan dari 'ず'?",
            options: ["zu", "sa", "ji", "ze"],
            answer: "zu",
          },
          {
            question: "Apa bacaan dari 'ぜ'?",
            options: ["ze", "sa", "ji", "zu"],
            answer: "ze",
          },
          {
            question: "Apa bacaan dari 'ぞ'?",
            options: ["zo", "sa", "ji", "zu"],
            answer: "zo",
          },
          {
            question: "Apa bacaan dari 'だ'?",
            options: ["da", "ta", "di", "du"],
            answer: "da",
          },
          {
            question: "Apa bacaan dari 'ぢ'?",
            options: ["ji", "ta", "zu", "de"],
            answer: "ji",
          },
          {
            question: "Apa bacaan dari 'づ'?",
            options: ["zu", "ta", "ji", "de"],
            answer: "zu",
          },
          {
            question: "Apa bacaan dari 'で'?",
            options: ["de", "ta", "ji", "zu"],
            answer: "de",
          },
          {
            question: "Apa bacaan dari 'ど'?",
            options: ["do", "ta", "ji", "zu"],
            answer: "do",
          },
        ],
      },
      {
        level: 5,
        questions: [
          {
            question: "Apa bacaan dari 'ば'?",
            options: ["ba", "pa", "bi", "bu"],
            answer: "ba",
          },
          {
            question: "Apa bacaan dari 'び'?",
            options: ["bi", "pa", "bu", "be"],
            answer: "bi",
          },
          {
            question: "Apa bacaan dari 'ぶ'?",
            options: ["bu", "pa", "bi", "be"],
            answer: "bu",
          },
          {
            question: "Apa bacaan dari 'べ'?",
            options: ["be", "pa", "bi", "bu"],
            answer: "be",
          },
          {
            question: "Apa bacaan dari 'ぼ'?",
            options: ["bo", "pa", "bi", "bu"],
            answer: "bo",
          },
          {
            question: "Apa bacaan dari 'ぱ'?",
            options: ["pa", "ba", "pi", "pu"],
            answer: "pa",
          },
          {
            question: "Apa bacaan dari 'ぴ'?",
            options: ["pi", "ba", "pu", "pe"],
            answer: "pi",
          },
          {
            question: "Apa bacaan dari 'ぷ'?",
            options: ["pu", "ba", "pi", "pe"],
            answer: "pu",
          },
          {
            question: "Apa bacaan dari 'ぺ'?",
            options: ["pe", "ba", "pi", "pu"],
            answer: "pe",
          },
          {
            question: "Apa bacaan dari 'ぽ'?",
            options: ["po", "ba", "pi", "pu"],
            answer: "po",
          },
          {
            question: "Apa bacaan dari 'きゃ'?",
            options: ["kya", "ki", "kyo", "kyu"],
            answer: "kya",
          },
          {
            question: "Apa bacaan dari 'きゅ'?",
            options: ["kyu", "ki", "kya", "kyo"],
            answer: "kyu",
          },
          {
            question: "Apa bacaan dari 'きょ'?",
            options: ["kyo", "ki", "kya", "kyu"],
            answer: "kyo",
          },
          {
            question: "Apa bacaan dari 'しゃ'?",
            options: ["sha", "shi", "sho", "shu"],
            answer: "sha",
          },
          {
            question: "Apa bacaan dari 'しゅ'?",
            options: ["shu", "shi", "sha", "sho"],
            answer: "shu",
          },
        ],
      },
      {
        level: 6,
        questions: [
          {
            question: "Apa bacaan dari 'しょ'?",
            options: ["sho", "shi", "sha", "shu"],
            answer: "sho",
          },
          {
            question: "Apa bacaan dari 'ちゃ'?",
            options: ["cha", "chi", "cho", "chu"],
            answer: "cha",
          },
          {
            question: "Apa bacaan dari 'ちゅ'?",
            options: ["chu", "chi", "cha", "cho"],
            answer: "chu",
          },
          {
            question: "Apa bacaan dari 'ちょ'?",
            options: ["cho", "chi", "cha", "chu"],
            answer: "cho",
          },
          {
            question: "Apa bacaan dari 'にゃ'?",
            options: ["nya", "ni", "nyo", "nyu"],
            answer: "nya",
          },
          {
            question: "Apa bacaan dari 'にゅ'?",
            options: ["nyu", "ni", "nya", "nyo"],
            answer: "nyu",
          },
          {
            question: "Apa bacaan dari 'にょ'?",
            options: ["nyo", "ni", "nya", "nyu"],
            answer: "nyo",
          },
          {
            question: "Apa bacaan dari 'ひゃ'?",
            options: ["hya", "hi", "hyo", "hyu"],
            answer: "hya",
          },
          {
            question: "Apa bacaan dari 'ひゅ'?",
            options: ["hyu", "hi", "hya", "hyo"],
            answer: "hyu",
          },
          {
            question: "Apa bacaan dari 'ひょ'?",
            options: ["hyo", "hi", "hya", "hyu"],
            answer: "hyo",
          },
          {
            question: "Apa bacaan dari 'みゃ'?",
            options: ["mya", "mi", "myo", "myu"],
            answer: "mya",
          },
          {
            question: "Apa bacaan dari 'みゅ'?",
            options: ["myu", "mi", "mya", "myo"],
            answer: "myu",
          },
          {
            question: "Apa bacaan dari 'みょ'?",
            options: ["myo", "mi", "mya", "myu"],
            answer: "myo",
          },
          {
            question: "Apa bacaan dari 'りゃ'?",
            options: ["rya", "ri", "ryo", "ryu"],
            answer: "rya",
          },
          {
            question: "Apa bacaan dari 'りゅ'?",
            options: ["ryu", "ri", "rya", "ryo"],
            answer: "ryu",
          },
        ],
      },
      {
        level: 7,
        questions: [
          {
            question: "Apa bacaan dari 'りょ'?",
            options: ["ryo", "ri", "rya", "ryu"],
            answer: "ryo",
          },
          {
            question: "Apa bacaan dari 'ぎゃ'?",
            options: ["gya", "gi", "gyo", "gyu"],
            answer: "gya",
          },
          {
            question: "Apa bacaan dari 'ぎゅ'?",
            options: ["gyu", "gi", "gya", "gyo"],
            answer: "gyu",
          },
          {
            question: "Apa bacaan dari 'ぎょ'?",
            options: ["gyo", "gi", "gya", "gyu"],
            answer: "gyo",
          },
          {
            question: "Apa bacaan dari 'じゃ'?",
            options: ["ja", "ji", "jo", "ju"],
            answer: "ja",
          },
          {
            question: "Apa bacaan dari 'じゅ'?",
            options: ["ju", "ji", "ja", "jo"],
            answer: "ju",
          },
          {
            question: "Apa bacaan dari 'じょ'?",
            options: ["jo", "ji", "ja", "ju"],
            answer: "jo",
          },
          {
            question: "Apa bacaan dari 'びゃ'?",
            options: ["bya", "bi", "byo", "byu"],
            answer: "bya",
          },
          {
            question: "Apa bacaan dari 'びゅ'?",
            options: ["byu", "bi", "bya", "byo"],
            answer: "byu",
          },
          {
            question: "Apa bacaan dari 'びょ'?",
            options: ["byo", "bi", "bya", "byu"],
            answer: "byo",
          },
          {
            question: "Apa bacaan dari 'ぴゃ'?",
            options: ["pya", "pi", "pyo", "pyu"],
            answer: "pya",
          },
          {
            question: "Apa bacaan dari 'ぴゅ'?",
            options: ["pyu", "pi", "pya", "pyo"],
            answer: "pyu",
          },
          {
            question: "Apa bacaan dari 'ぴょ'?",
            options: ["pyo", "pi", "pya", "pyu"],
            answer: "pyo",
          },
          {
            question: "Apa bacaan dari 'う'?",
            options: ["u", "a", "i", "e"],
            answer: "u",
          },
          {
            question: "Apa bacaan dari 'お'?",
            options: ["o", "a", "i", "e"],
            answer: "o",
          },
        ],
      },
      {
        level: 8,
        questions: [
          {
            question: "Apa bacaan dari 'が'?",
            options: ["ga", "ka", "gi", "gu"],
            answer: "ga",
          },
          {
            question: "Apa bacaan dari 'ぎ'?",
            options: ["gi", "ga", "gu", "ge"],
            answer: "gi",
          },
          {
            question: "Apa bacaan dari 'ぐ'?",
            options: ["gu", "ga", "gi", "ge"],
            answer: "gu",
          },
          {
            question: "Apa bacaan dari 'げ'?",
            options: ["ge", "ga", "gi", "gu"],
            answer: "ge",
          },
          {
            question: "Apa bacaan dari 'ご'?",
            options: ["go", "ga", "gi", "gu"],
            answer: "go",
          },
          {
            question: "Apa bacaan dari 'ざ'?",
            options: ["za", "sa", "ji", "zu"],
            answer: "za",
          },
          {
            question: "Apa bacaan dari 'じ'?",
            options: ["ji", "sa", "zu", "ze"],
            answer: "ji",
          },
          {
            question: "Apa bacaan dari 'ず'?",
            options: ["zu", "sa", "ji", "ze"],
            answer: "zu",
          },
          {
            question: "Apa bacaan dari 'ぜ'?",
            options: ["ze", "sa", "ji", "zu"],
            answer: "ze",
          },
          {
            question: "Apa bacaan dari 'ぞ'?",
            options: ["zo", "sa", "ji", "zu"],
            answer: "zo",
          },
          {
            question: "Apa bacaan dari 'だ'?",
            options: ["da", "ta", "di", "du"],
            answer: "da",
          },
          {
            question: "Apa bacaan dari 'ぢ'?",
            options: ["ji", "ta", "zu", "de"],
            answer: "ji",
          },
          {
            question: "Apa bacaan dari 'づ'?",
            options: ["zu", "ta", "ji", "de"],
            answer: "zu",
          },
          {
            question: "Apa bacaan dari 'で'?",
            options: ["de", "ta", "ji", "zu"],
            answer: "de",
          },
          {
            question: "Apa bacaan dari 'ど'?",
            options: ["do", "ta", "ji", "zu"],
            answer: "do",
          },
        ],
      },
      {
        level: 9,
        questions: [
          {
            question: "Apa bacaan dari 'ば'?",
            options: ["ba", "pa", "bi", "bu"],
            answer: "ba",
          },
          {
            question: "Apa bacaan dari 'び'?",
            options: ["bi", "pa", "bu", "be"],
            answer: "bi",
          },
          {
            question: "Apa bacaan dari 'ぶ'?",
            options: ["bu", "pa", "bi", "be"],
            answer: "bu",
          },
          {
            question: "Apa bacaan dari 'べ'?",
            options: ["be", "pa", "bi", "bu"],
            answer: "be",
          },
          {
            question: "Apa bacaan dari 'ぼ'?",
            options: ["bo", "pa", "bi", "bu"],
            answer: "bo",
          },
          {
            question: "Apa bacaan dari 'ぱ'?",
            options: ["pa", "ba", "pi", "pu"],
            answer: "pa",
          },
          {
            question: "Apa bacaan dari 'ぴ'?",
            options: ["pi", "ba", "pu", "pe"],
            answer: "pi",
          },
          {
            question: "Apa bacaan dari 'ぷ'?",
            options: ["pu", "ba", "pi", "pe"],
            answer: "pu",
          },
          {
            question: "Apa bacaan dari 'ぺ'?",
            options: ["pe", "ba", "pi", "pu"],
            answer: "pe",
          },
          {
            question: "Apa bacaan dari 'ぽ'?",
            options: ["po", "ba", "pi", "pu"],
            answer: "po",
          },
          {
            question: "Apa bacaan dari 'きゃ'?",
            options: ["kya", "ki", "kyo", "kyu"],
            answer: "kya",
          },
          {
            question: "Apa bacaan dari 'きゅ'?",
            options: ["kyu", "ki", "kya", "kyo"],
            answer: "kyu",
          },
          {
            question: "Apa bacaan dari 'きょ'?",
            options: ["kyo", "ki", "kya", "kyu"],
            answer: "kyo",
          },
          {
            question: "Apa bacaan dari 'しゃ'?",
            options: ["sha", "shi", "sho", "shu"],
            answer: "sha",
          },
          {
            question: "Apa bacaan dari 'しゅ'?",
            options: ["shu", "shi", "sha", "sho"],
            answer: "shu",
          },
        ],
      },
      {
        level: 10,
        questions: [
          {
            question: "Apa bacaan dari 'しょ'?",
            options: ["sho", "shi", "sha", "shu"],
            answer: "sho",
          },
          {
            question: "Apa bacaan dari 'ちゃ'?",
            options: ["cha", "chi", "cho", "chu"],
            answer: "cha",
          },
          {
            question: "Apa bacaan dari 'ちゅ'?",
            options: ["chu", "chi", "cha", "cho"],
            answer: "chu",
          },
          {
            question: "Apa bacaan dari 'ちょ'?",
            options: ["cho", "chi", "cha", "chu"],
            answer: "cho",
          },
          {
            question: "Apa bacaan dari 'にゃ'?",
            options: ["nya", "ni", "nyo", "nyu"],
            answer: "nya",
          },
          {
            question: "Apa bacaan dari 'にゅ'?",
            options: ["nyu", "ni", "nya", "nyo"],
            answer: "nyu",
          },
          {
            question: "Apa bacaan dari 'にょ'?",
            options: ["nyo", "ni", "nya", "nyu"],
            answer: "nyo",
          },
          {
            question: "Apa bacaan dari 'ひゃ'?",
            options: ["hya", "hi", "hyo", "hyu"],
            answer: "hya",
          },
          {
            question: "Apa bacaan dari 'ひゅ'?",
            options: ["hyu", "hi", "hya", "hyo"],
            answer: "hyu",
          },
          {
            question: "Apa bacaan dari 'ひょ'?",
            options: ["hyo", "hi", "hya", "hyu"],
            answer: "hyo",
          },
          {
            question: "Apa bacaan dari 'みゃ'?",
            options: ["mya", "mi", "myo", "myu"],
            answer: "mya",
          },
          {
            question: "Apa bacaan dari 'みゅ'?",
            options: ["myu", "mi", "mya", "myo"],
            answer: "myu",
          },
          {
            question: "Apa bacaan dari 'みょ'?",
            options: ["myo", "mi", "mya", "myu"],
            answer: "myo",
          },
          {
            question: "Apa bacaan dari 'りゃ'?",
            options: ["rya", "ri", "ryo", "ryu"],
            answer: "rya",
          },
          {
            question: "Apa bacaan dari 'りゅ'?",
            options: ["ryu", "ri", "rya", "ryo"],
            answer: "ryu",
          },
          {
            question: "Apa bacaan dari 'りょ'?",
            options: ["ryo", "ri", "rya", "ryu"],
            answer: "ryo",
          },
        ],
      },
    ],
  };

  return NextResponse.json(data);
}
