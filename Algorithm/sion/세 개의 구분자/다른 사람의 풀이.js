function solution(myStr) {
  const list = myStr.split(/[a|b|c]/).filter((str) => str);
  return list.length ? list : ["EMPTY"];
}

const solution = (s) => s.match(/[^a-c]+/g) || ["EMPTY"];

function solution(myStr) {
  const tmp1 = myStr.split("a").join("b");
  const tmp2 = tmp1.split("b").join("c");
  const tmp3 = tmp2.split("c").filter((x) => x);
  if (tmp3.length === 0) return ["EMPTY"];
  return tmp3;
}
