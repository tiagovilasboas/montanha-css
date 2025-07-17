import fs from "node:fs";

(async () => {
  // Ler tokens.json
  const tokensJson = await fs.promises.readFile("dist/tokens.json", "utf8");
  const tokens = JSON.parse(tokensJson);

  // Converter para formato Figma Tokens
  const figmaTokens = {
    color: {
      blue: {},
      gray: {}
    },
    radius: {},
    shadow: {},
    breakpoint: {}
  };

  // Processar cada token
  for (const [key, value] of Object.entries(tokens)) {
    if (key.startsWith("--mnt-blue-")) {
      const shade = key.replace("--mnt-blue-", "");
      figmaTokens.color.blue[shade] = {
        value: `{${key}}`,
        type: "color"
      };
    } else if (key.startsWith("--mnt-gray-")) {
      const shade = key.replace("--mnt-gray-", "");
      figmaTokens.color.gray[shade] = {
        value: `{${key}}`,
        type: "color"
      };
    } else if (key.startsWith("--mnt-radius-")) {
      const size = key.replace("--mnt-radius-", "");
      figmaTokens.radius[size] = {
        value: `{${key}}`,
        type: "borderRadius"
      };
    } else if (key.startsWith("--mnt-shadow-")) {
      const size = key.replace("--mnt-shadow-", "");
      figmaTokens.shadow[size] = {
        value: `{${key}}`,
        type: "boxShadow"
      };
    } else if (key.startsWith("--mnt-break-")) {
      const size = key.replace("--mnt-break-", "");
      figmaTokens.breakpoint[size] = {
        value: `{${key}}`,
        type: "sizing"
      };
    }
  }

  // Escrever arquivo
  await fs.promises.writeFile(
    "dist/tokens.figmatokens.json", 
    JSON.stringify(figmaTokens, null, 2)
  );
  
  console.log("✅ Figma Tokens gerado: dist/tokens.figmatokens.json");
})(); 