function solution(food) {
  let answer = "";
  for (let i = 1; i < food.length; i++) {
    food[i] = parseInt(food[i] / 2);
    for (let j = 0; j < food[i]; j++) answer += i;
  }
  answer += 0;
  for (let i = food.length; i > 0; i--)
    for (let j = 0; j < food[i]; j++) answer += i;
  return answer;
}
