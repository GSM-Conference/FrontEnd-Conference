function solution(num_list) {
  let even = 0;
  let odd = 0;

  num_list.map((v, idx) => {
    !(idx % 2) ? (even += v) : (odd += v);
  });

  return odd > even ? odd : even;
}
