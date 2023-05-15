function solution(s) {
  return [...s]
    .map((v) => s.match(new RegExp(v, "g")))
    .map((v) => (v.length == 1 ? v : []))
    .sort()
    .join("");
}
