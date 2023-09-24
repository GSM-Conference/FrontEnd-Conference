const solution = (s, d) => [...s].filter((v, i) => !d.includes(i)).join("");
