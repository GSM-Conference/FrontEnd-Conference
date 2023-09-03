const solution = (str_list, ex) =>
  str_list.filter((v) => !v.includes(ex)).join("");

function solution(str_list, ex) {
  return str_list.reduce((acc, cur) => {
    if (cur.includes(ex)) return acc;
    return acc + cur;
  }, "");
}
