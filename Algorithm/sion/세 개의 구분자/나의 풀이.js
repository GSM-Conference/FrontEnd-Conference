function solution(myStr) {
  const result = myStr.split(/[a-c]/).filter((v) => v);
  return result.length === 0 ? ["EMPTY"] : result;
}
