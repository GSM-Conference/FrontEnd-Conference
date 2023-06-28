function solution(s) {
  let result = s.split(" ");
  let answer = 0,
    num = 0;
  let stack = [];

  for (let i = 0; i < result.length; i++) {
    const value = result[i];
    if (value === "Z") {
      num = stack.pop();
      answer -= num;
    } else {
      num = Number(value);
      answer += num;
      stack.push(num);
    }
  }

  return answer;
}
