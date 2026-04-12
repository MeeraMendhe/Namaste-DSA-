async function decodeSecretMessage(docUrl) {
  const response = await fetch(docUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch document: ${response.status} ${response.statusText}`);
  }

  const html = await response.text();

  const rows = [...html.matchAll(/<tr[\s\S]*?<\/tr>/gi)];
  const points = [];

  for (const rowMatch of rows) {
    const row = rowMatch[0];
    const cells = [...row.matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)]
      .map(m => m[1]
        .replace(/<[^>]+>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&#39;/g, "'")
        .replace(/&quot;/g, '"')
        .trim());

    if (cells.length < 3) continue;

    const x = Number(cells[0]);
    const char = cells[1];
    const y = Number(cells[2]);

    if (Number.isFinite(x) && Number.isFinite(y) && char.length > 0) {
      points.push({ x, y, char });
    }
  }

  if (points.length === 0) {
    throw new Error("No valid grid data found in the document.");
  }

  const maxX = Math.max(...points.map(p => p.x));
  const maxY = Math.max(...points.map(p => p.y));

  const grid = Array.from({ length: maxY + 1 }, () =>
    Array(maxX + 1).fill(" ")
  );

  for (const { x, y, char } of points) {
    grid[y][x] = char;
  }

  for (const row of grid) {
    console.log(row.join(""));
  }
}

console.log(decodeSecretMessage("https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub"))