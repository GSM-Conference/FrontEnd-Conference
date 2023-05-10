function solution(myString) {
  return myString.split("x").map((v) => v.length);
}

function solution(myString) {
  var answer = [];
  myString.split("x").map((item) => {
    answer.push(item.length);
  });
  return answer;
}
