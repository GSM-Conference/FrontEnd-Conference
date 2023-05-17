function solution(myString) {
  return myString
    .split("")
    .map((v) => (v === "a" || v === "A" ? v.toUpperCase() : v.toLowerCase()))
    .join("");
}
