import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
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

  const bootstrapFile = await findBootstrapFile(jsFiles, outputAssetsDir);

  const cssTags = cssFiles
    .map((file) => `    <link rel="stylesheet" href="/assets/${file}" />`)
    .join("\n");
  const scriptTag = `    <script type="module" src="/assets/${bootstrapFile}"></script>`;

  const tanstackBootstrap = `    <script>
      window.$_TSR = window.$_TSR || {
        initialized: true,
        buffer: [],
        t: new Map(),
        h: function () {},
        router: {
          manifest: { routes: {} },
          dehydratedData: null,
          lastMatchId: null,
          matches: []
        }
      };
    </script>`;

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
${tanstackBootstrap}
${scriptTag}
  </body>
</html>
`;

  await writeFile(path.join(outputDir, "index.html"), html, "utf8");
  console.log("Prepared static output in _site/");
}

async function findBootstrapFile(jsFiles, assetsDir) {
  for (const file of jsFiles) {
    const code = await readFile(path.join(assetsDir, file), "utf8");
    if (code.includes("hydrateRoot(")) {
      return file;
    }
  }

  return jsFiles[jsFiles.length - 1];
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});