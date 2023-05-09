function solution(x) {
  let answer = true;
  const round = String(x);
  let result = 0;
  let num = x;

  for (let i = 0; i < round.length; i++) {
    result += num % 10;
    num = Math.trunc(num / 10); //소수점 버려주는 것기능 math.trunc!! 중요함
  }

  if (x % result === 0) {
    return answer;
  } else {
    answer = false;
    return answer;
  }
}
