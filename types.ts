export type BookNames =
  | "Genesis"
  | "Exodus"
  | "Leviticus"
  | "Numbers"
  | "Deuteronomy"
  | "Joshua"
  | "Judges"
  | "1 Samuel"
  | "2 Samuel"
  | "1 Kings"
  | "2 Kings"
  | "Isaiah"
  | "Jeremiah"
  | "Ezekiel"
  | "Hosea"
  | "Joel"
  | "Amos"
  | "Obadiah"
  | "Jonah"
  | "Micah"
  | "Nahum"
  | "Habakkuk"
  | "Zephaniah"
  | "Haggai"
  | "Zechariah"
  | "Malachi"
  | "1 Chronicles"
  | "2 Chronicles"
  | "Psalms"
  | "Job"
  | "Proverbs"
  | "Ruth"
  | "Song of Songs"
  | "Ecclesiastes"
  | "Lamentations"
  | "Esther"
  | "Daniel"
  | "Ezra"
  | "Nehemiah";

export interface Root {
  Tanach: Tanach;
}

export interface Tanach {
  teiHeader: TeiHeader;
  tanach: Tanach2;
}

export interface TeiHeader {
  fileDesc: FileDesc;
}

export interface FileDesc {
  titleStmt: TitleStmt;
  editionStmt: EditionStmt;
  notesStmt: NotesStmt;
  extent: number;
}

export interface TitleStmt {
  title: string[];
}

export interface EditionStmt {
  edition: Edition;
  respStmt: RespStmt;
}

export interface Edition {
  "#text": string;
  version: string;
  date: string;
  build: number;
  buildDateTime: string;
}

export interface RespStmt {
  resp: string[];
}

export interface NotesStmt {
  note: string;
}

export interface Tanach2 {
  book: Book[];
}

export interface Book {
  names: Names;
  c: { vs: number }[] | { vs: number };
  cs: number;
}

export interface Names {
  name: BookNames;
  abbrev: string;
  filename: string;
}

export type Metadata = {
  [key in BookNames]: {
    totalChapters: number;
    versesInChapter: {
      [k: string]: number;
    };
    abbreviation: string;
  };
};
