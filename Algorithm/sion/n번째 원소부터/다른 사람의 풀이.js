function solution(num_list, n) {
  return num_list.slice(n - 1);
}

function solution(num_list, n) {
  let result = [];

  result = num_list.splice(n - 1, num_list.length - n + 1);

  return result;
}
