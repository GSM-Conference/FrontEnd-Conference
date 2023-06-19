const solution = (a, i) => a.indexOf(1, i);

function solution(arr, idx) {
  return arr.findIndex((v, i) => idx <= i && v === 1);
}
