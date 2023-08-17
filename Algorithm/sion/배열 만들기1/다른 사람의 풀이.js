function solution(n, k) {
  var answer = [];
  for (let i = k; i <= n; i += k) {
    answer.push(i);
  }
  return answer;
}

const solution = (n, k) =>
  Array(~~(n / k))
    .fill(k)
    .map((v, i) => v * (i + 1));

function solution(n, k) {
  let answer = [];

  for (let i = 1; i <= n; i++) if (i % k === 0) answer.push(i);

  return answer;
}
