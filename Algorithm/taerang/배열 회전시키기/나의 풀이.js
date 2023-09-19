function solution(numbers, direction) {
  let answer = numbers;
  let word = "";

  switch (direction) {
    case "right":
      word = answer.pop();
      answer.unshift(word);
      break;

    case "left":
      word = answer.shift();
      answer.push(word);
      break;
  }

  return answer;
}
