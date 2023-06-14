function solution(num_list) {
  return num_list.findIndex((num) => num < 0);
}

function solution(num_list) {
  let a = num_list.filter((c) => {
    if (c < 0) return c;
  });
  return num_list.indexOf(a[0]);
}
