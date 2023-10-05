function solution(num_list) {
  const odd = num_list
    .filter((v, i) => i % 2 === 1)
    .reduce((acc, cur) => acc + cur, 0);
  const even = num_list
    .filter((v, i) => i % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
  return odd > even ? odd : even;
}
