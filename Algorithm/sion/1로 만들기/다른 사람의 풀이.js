function solution(num_list) {
  return num_list.map((v) => v.toString(2).length - 1).reduce((a, c) => a + c);
}

function solution(num_list) {
  var answer = 0;
  num_list.forEach((num) => {
    while (num !== 1) {
      if (num % 2 == 0) {
        num = num / 2;
        answer = answer + 1;
      } else {
        num = (num - 1) / 2;
        answer = answer + 1;
      }
    }
  });
  return answer;
}
