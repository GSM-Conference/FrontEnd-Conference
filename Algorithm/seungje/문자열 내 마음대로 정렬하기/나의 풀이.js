function solution(strings, n) {
  strings.sort(function compare(a, b) {
    if (a[n] < b[n]) return -1;
    if (a[n] > b[n]) return 1;
    return a > b ? 1 : b > a ? -1 : 0;
  });
  return strings;
}
