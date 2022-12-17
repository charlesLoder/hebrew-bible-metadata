# Tanach / Hebrew Bible Metadata

A json file of chapter and verse metadata about the Tanach / Hebrew Bible.

## use

The `metadata.json` file can be used like any json file.

See the `example.js` file and run `deno run -A example.js` or `node example.js`.

```ts
import Metadata from "./metadata.json" assert { type: "json" };

console.log(Metadata["Genesis"].versesInChapter["4"]);
// 26
```

## contents

The `metadata.json` file is built using the `convert.ts` script and the `tanach.json` file.

The `tanach.json` file is a json representation of the `TanachIndex.xml` file, which is from the [Tanach.us](https://tanach.us/) site and was graciously provided by Chris V. Kimball,

The `tanach.json` file was converted from the `TanachIndex.xml` file using [this tool](https://codebeautify.org/xmltojson).

The `types.ts` file was generated from from the `tanach.json` file using [this tool](https://transform.tools/json-to-typescript).
