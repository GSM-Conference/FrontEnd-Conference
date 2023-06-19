function solution(s) {
  let answer = "";
  let result = s.split(" ");

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      if (j % 2 === 0) {
        answer += result[i][j].toUpperCase();
      } else {
        answer += result[i][j].toLowerCase();
      }
    }

    if (i !== result.length - 1) {
      answer += " ";
    }
  }

  return answer;
}
