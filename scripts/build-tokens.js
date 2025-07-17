import fs from "node:fs";
import postcss from "postcss";
import postcssJs from "postcss-js";
import css from "fs/promises";

(async () => {
  const raw = await fs.promises.readFile("src/core/tokens.css", "utf8");
  const root = postcss.parse(raw);
  const json = {};
  root.walkDecls(decl=>{
    if(decl.prop.startsWith("--mnt-") || decl.prop.startsWith("--color")){
      json[decl.prop] = decl.value;
    }
  });
  await fs.promises.writeFile("dist/tokens.json", JSON.stringify(json, null, 2));
})(); 