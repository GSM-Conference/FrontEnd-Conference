function solution(num_list) {
  let odd = "",
    even = "";
  num_list.map((v) => (v % 2 === 0 ? (even += v) : (odd += v)));
  return Number(odd) + Number(even);
}
