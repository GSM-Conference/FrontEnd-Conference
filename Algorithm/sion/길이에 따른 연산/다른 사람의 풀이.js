function solution(num_list) {
  return num_list.reduce((prev, acc) =>
    num_list.length > 10 ? prev + acc : prev * acc
  );
}
