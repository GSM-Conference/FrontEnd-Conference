function solution(s) {
  return s
    .split("")
    .filter((v, i) => !(s.slice(0, i) + s.slice(i + 1)).includes(v))
    .sort()
    .join("");
}
