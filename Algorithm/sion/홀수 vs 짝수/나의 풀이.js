function solution(num_list) {
  let odd = 0,
    even = 0;
  num_list.map((v, i) => {
    if (i % 2 === 0) even += v;
    else odd += v;
  });

  return odd >= even ? odd : even;
}
