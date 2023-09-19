function solution(box, n) {
  let answer = 1;
  for (let i = 0; i < 3; i++) {
    answer *= Math.floor(box[i] / n);
    console.log(answer);
  }
  return answer;
}
