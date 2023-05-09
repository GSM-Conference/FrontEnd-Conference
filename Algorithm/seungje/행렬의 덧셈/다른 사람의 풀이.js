function sumMatrix(A, B) {
  return A.map((a, i) => a.map((b, j) => A[i][j] + B[i][j]));
}
