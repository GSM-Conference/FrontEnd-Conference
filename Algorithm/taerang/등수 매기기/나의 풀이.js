function solution(score) {
  let answer = [];
  let result = [];

  for (let i = 0; i < score.length; i++) {
    let sum = score[i][0] + score[i][1];
    result.push(sum);
  }

  for (let i = 0; i < score.length; i++) {
    let rank = 1;

    for (let j = 0; j < score.length; j++) {
      if (result[j] > result[i]) {
        rank++;
      }
    }

    answer.push(rank);
  }

  return answer;
}
