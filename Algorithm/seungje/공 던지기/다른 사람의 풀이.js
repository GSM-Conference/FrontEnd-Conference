function solution(numbers, k) {
  return numbers[(--k * 2) % numbers.length];
}
