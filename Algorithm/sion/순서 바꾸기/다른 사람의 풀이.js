function solution(num_list, n) {
  num_list.push(...num_list.splice(0, n));
  return num_list;
}

function solution(num_list, n) {
  num_list.unshift(...num_list.splice(n));
  return num_list;
}
