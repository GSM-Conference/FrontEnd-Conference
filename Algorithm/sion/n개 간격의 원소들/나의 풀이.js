function solution(num_list, n) {
  return num_list.filter((v, i) => i % n === 0);
}
