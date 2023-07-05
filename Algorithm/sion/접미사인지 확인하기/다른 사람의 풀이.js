const solution = (str, suff) => (str.endsWith(suff) ? 1 : 0);

function solution(my_string, is_suffix) {
  return Number(new RegExp(`${is_suffix}$`).test(my_string));
}
