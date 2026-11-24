// make.fun competition entry script
import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY_TEXT: string = "v2.3.9: Fixed bug where biting tongue occurred during routine mastication despite zero path changes.";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), `${ENTRY_TEXT}\n`, "utf8");
