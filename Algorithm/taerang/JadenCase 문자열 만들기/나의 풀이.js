function solution(s) {
  let answer = s.split(" ");

  let result = answer.map(
    (A) => A.charAt(0).toUpperCase() + A.slice(1).toLowerCase()
  );

  answer = result.join(" ");
  return answer;
}
