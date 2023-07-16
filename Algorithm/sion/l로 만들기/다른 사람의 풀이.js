function solution(myString) {
  return [...myString].map((v) => (v < "l" ? "l" : v)).join("");
}
