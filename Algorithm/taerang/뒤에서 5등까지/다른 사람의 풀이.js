function solution(num_list) {
  //arrow로 더 짧아진 코드
  return num_list.sort((a, b) => a - b).slice(0, 5);
}
