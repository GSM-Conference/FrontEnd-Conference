function solution(arr1, arr2) {
  return arr1.map((i, j) => {
    return i.map((k, l) => {
      return k + arr2[j][l];
    });
  });
}
