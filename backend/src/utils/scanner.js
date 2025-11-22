const profaneWords = ['badword'];

export function scanText(content) {
  const text = JSON.stringify(content).toLowerCase();
  const flags = profaneWords.filter((word) => text.includes(word));
  return { flags, safe: flags.length === 0 };
}

export function scanImagePlaceholder() {
  return { safe: true, flags: [] };
}
