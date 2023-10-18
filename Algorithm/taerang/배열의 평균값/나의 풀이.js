function solution(numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const answer = sum / numbers.length;

  return answer;
}
