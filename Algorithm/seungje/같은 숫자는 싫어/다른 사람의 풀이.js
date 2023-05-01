function solution(arr) {
  let answer = [];
  let i = 0;
  let j = -1;
  while (i < arr.length) {
    arr[i] !== j ? answer.push(arr[i]) && (j = arr[i]) : answer;
    i++;
  }
  return answer;
}
