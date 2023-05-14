function solution(arr1, arr2) {
  return arr1.map((v, i1) => v.map((_, i2) => arr1[i1][i2] + arr2[i1][i2]));
}
