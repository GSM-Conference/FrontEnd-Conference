function solution(str_list) {
  let answer = [];
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] === "l") {
      for (let k = 0; k < i; k++) {
        answer.push(str_list[k]);
      }
      break;
    } else if (str_list[i] === "r") {
      for (let k = i + 1; k < str_list.length; k++) {
        answer.push(str_list[k]);
      }
      break;
    }
  }
  return answer;
}
