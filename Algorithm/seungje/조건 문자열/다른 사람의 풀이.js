function solution(ineq, eq, n, m) {
  if (eq === "=") if (n === m) return 1;

  if (ineq === "<") if (Math.max(m, n) === m) return 1;
  if (ineq === ">") if (Math.max(m, n) === n) return 1;
  return 0;
}
