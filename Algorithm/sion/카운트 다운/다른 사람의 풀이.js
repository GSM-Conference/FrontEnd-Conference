function solution(start, end) {
  var answer = [];

  for (let i = start; i >= end; i--) {
    answer.push(i);
  }

  return answer;
}

function solution(start, end) {
  return Array.from(Array(start - end + 1), (_, i) => start - i);
}
