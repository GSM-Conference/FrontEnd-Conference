function solution(numbers, n) {
  let answer = 0;
  numbers.forEach((i) => {
    if (answer > n) return answer;
    answer += i;
  });
  return answer;
}
