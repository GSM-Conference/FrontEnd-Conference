function solution(arr) {
  const result = arr.filter((v) => v > Math.min(...arr));
  return result.length === 0 ? [-1] : result;
}
