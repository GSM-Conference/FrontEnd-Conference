const solution = (strs, ex) =>
  strs.reduce((acc, cur) => acc + (cur.includes(ex) ? "" : cur), "");
