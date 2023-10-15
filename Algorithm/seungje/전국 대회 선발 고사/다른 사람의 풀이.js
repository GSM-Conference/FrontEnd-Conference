function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((r, i) => {
      if (attendance[i]) {
        return [r, i];
      } else {
        return Infinity;
      }
    })
    .filter((r) => r !== Infinity)
    .sort((a, b) => a[0] - b[0])
    .splice(0, 3);

  return a[1] * 10000 + b[1] * 100 + c[1];
}
