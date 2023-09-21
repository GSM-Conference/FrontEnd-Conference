function solution(numbers) {
  return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
}
