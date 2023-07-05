let solution = (s) =>
  s
    .split(" ")
    .reduce((t, c) => (c == "Z" ? t.slice(0, -1) : [...t, c]), [])
    .map(Number)
    .reduce((a, b) => a + b, 0);
