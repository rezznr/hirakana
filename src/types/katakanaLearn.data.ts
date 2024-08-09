export interface Character {
  romaji: string;
  katakana: string;
}

export interface KatakanaRow {
  row: string;
  characters: Character[];
}

export interface KatakanaData {
  katakana: KatakanaRow[];
  dakuon: KatakanaRow[];
  handakuon: KatakanaRow[];
  yoon: KatakanaRow[];
}
