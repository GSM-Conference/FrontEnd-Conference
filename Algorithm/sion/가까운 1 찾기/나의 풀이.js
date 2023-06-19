function solution(arr, idx) {
  return arr.findIndex((value, index) => value === 1 && index >= idx);
}
