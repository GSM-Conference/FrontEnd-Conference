function solution(arr1, arr2) {
  let sum1 = 0,
    sum2 = 0;
  if (arr1.length === arr2.length) {
    sum1 = arr1.reduce((acc, pre) => acc + pre);
    sum2 = arr2.reduce((acc, pre) => acc + pre);
    return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1;
  }
  return arr1.length > arr2.length ? 1 : -1;
}
