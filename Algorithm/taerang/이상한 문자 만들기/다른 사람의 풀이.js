let solution = (s) =>
  s
    .split(" ")
    .map((el) =>
      el
        .split("")
        .map((e, i) => (i % 2 ? e.toLowerCase() : e.toUpperCase()))
        .join("")
    )
    .join(" ");
