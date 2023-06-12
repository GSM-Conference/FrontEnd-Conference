function solution(num_str) {
  return num_str.split("").reduce((prev, acc) => Number(prev) + Number(acc));
}
