function solution(arr) {
  let answer = [];
  arr.forEach((n, i) => {
    if (i < arr.length) {
      if (n !== arr[i + 1]) {
        answer.push(n);
      }
    }
  });

  return answer;
}
