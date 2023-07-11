function solution(n_str) {
  return n_str.slice(n_str.split("").findIndex((v) => v !== "0"));
}
