function solution(price, money, count) {
  let answer = 0;

  for (let i = 1; i <= count; i++) {
    answer += price * i;
    console.log(answer);
  }

  if (answer - money < 0) {
    return 0;
  } else {
    return answer - money;
  }
}
