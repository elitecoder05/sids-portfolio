import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const sourceAssetsDir = path.join(rootDir, "dist", "client", "assets");
const outputDir = path.join(rootDir, "_site");
const outputAssetsDir = path.join(outputDir, "assets");

async function main() {
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputAssetsDir, { recursive: true });
  await cp(sourceAssetsDir, outputAssetsDir, { recursive: true });

  const assetFiles = await readdir(outputAssetsDir);
  const cssFiles = assetFiles.filter((file) => file.endsWith(".css")).sort();
  const jsFiles = assetFiles.filter((file) => file.endsWith(".js")).sort();

  if (jsFiles.length === 0) {
    throw new Error("No JavaScript bundle found in dist/client/assets");
  }

  const cssTags = cssFiles
    .map((file) => `    <link rel="stylesheet" href="/assets/${file}" />`)
    .join("\n");
  const scriptTags = jsFiles
    .map((file) => `    <script type="module" src="/assets/${file}"></script>`)
    .join("\n");

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Sidharth Varma Gurijala - Software Engineer</title>
${cssTags}
  </head>
  <body>
    <div id="root"></div>
${scriptTags}
  </body>
</html>
`;

  await writeFile(path.join(outputDir, "index.html"), html, "utf8");
  console.log("Prepared static output in _site/");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});