function solution(a, b, c) {
  let answer = 0;

  if (a === b && b === c) {
    answer =
      (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
  } else if (a === b || a === c || b === c) {
    answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
  } else {
    answer = a + b + c;
  }

  return answer;
}
