import Tanach from "./tanach.json" assert { type: "json" };
import { Metadata } from "./types.ts";

const books = Tanach.Tanach.tanach.book;

const metadata = books.reduce((a, c) => {
  return {
    ...a,
    [c.names.name]: {
      abbreviation: c.names.abbrev,
      totalChapters: c.cs,
      versesInChapter: Array.isArray(c.c)
        ? c.c.reduce((b, d, i) => {
            return {
              ...b,
              [i + 1]: d.vs,
            };
          }, {})
        : { "1": c.c.vs },
    },
  };
}, {} as Metadata);

Deno.writeTextFileSync("./metadata.json", JSON.stringify(metadata));
