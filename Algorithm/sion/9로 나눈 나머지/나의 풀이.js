function solution(number) {
  return [...number].reduce((prev, acc) => Number(prev) + Number(acc)) % 9;
}
