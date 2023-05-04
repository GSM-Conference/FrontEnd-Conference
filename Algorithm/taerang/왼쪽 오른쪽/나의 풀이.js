function solution(str_list) {
  let answer = [];

  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] == "l") {
      for (let j = 0; j < i; j++) {
        answer.push(str_list[j]);
      }
      break;
    } else if (str_list[i] == "r") {
      for (let q = i + 1; q < str_list.length; q++) {
        //r이 나온 다음
        answer.push(str_list[q]);
      }
      break;
      a;
    }
  }
  return answer;
}
