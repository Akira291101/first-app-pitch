import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const line = "Tell me the app you keep wishing existed, and you will be using it on your phone tonight — you never write a line, you just get the build.";
writeFileSync(join(outputDir, "entry.txt"), `${line}\n`, "utf8");
