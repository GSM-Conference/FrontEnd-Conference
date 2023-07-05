const solution = (myString, pat) =>
  [...myString]
    .map((v) => (v === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0;
