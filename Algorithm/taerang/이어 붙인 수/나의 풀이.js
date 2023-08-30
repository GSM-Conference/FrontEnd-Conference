function solution(num_list) {
  let answer = 0;
  let odd = [];
  let even = [];

  // 홀수와 짝수 분리
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      even.push(num_list[i]);
    } else {
      odd.push(num_list[i]);
    }
  }

  const oddNumber = parseInt(odd.join(""));
  const evenNumber = parseInt(even.join(""));
  answer = oddNumber + evenNumber;

  return answer;
}
