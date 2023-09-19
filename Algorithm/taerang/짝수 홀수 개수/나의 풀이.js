function solution(num_list) {
  let answer = [0, 0]; // [짝수 개수, 홀수 개수]를 나타내는 배열로 초기화

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      answer[0]++; // 짝수인 경우 짝수 개수 증가
    } else {
      answer[1]++; // 홀수인 경우 홀수 개수 증가
    }
  }

  return answer;
}
