function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}

var solution = (s) =>
  [...s]
    .filter((c) => s.match(new RegExp(c, "g")).length == 1)
    .sort()
    .join("");
