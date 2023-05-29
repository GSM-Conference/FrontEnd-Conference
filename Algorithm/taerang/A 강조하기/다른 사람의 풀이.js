function solution(myString) {
  return [...myString]
    .map((str) => (["a", "A"].includes(str) ? "A" : str.toLowerCase()))
    .join("");
}
