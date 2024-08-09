export interface Character {
  romaji: string;
  hiragana: string;
}

export interface HiraganaRow {
  row: string;
  characters: Character[];
}

export interface HiraganaData {
  hiragana: HiraganaRow[];
  dakuon: HiraganaRow[];
  handakuon: HiraganaRow[];
  yoon: HiraganaRow[];
}
