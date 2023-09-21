function solution(num_list) {
  const odd = [...(num_list + "")]
    .map((x) => (Number(x) % 2 === 1 ? x : ""))
    .join("");
  const even = [...(num_list + "")]
    .map((x) => (Number(x) % 2 === 0 ? x : ""))
    .join("");
  return Number(odd) + Number(even);
}
