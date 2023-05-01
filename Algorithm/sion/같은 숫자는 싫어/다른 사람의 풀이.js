function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

let solution = (_) => _.filter((i, $) => i != _[--$]);
