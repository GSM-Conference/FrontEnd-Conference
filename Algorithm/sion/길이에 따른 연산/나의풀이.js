function solution(num_list) {
  return num_list.length > 10
    ? num_list.reduce((prev, acc) => prev + acc)
    : num_list.reduce((prev, acc) => prev * acc);
}
