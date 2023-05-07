function solution(strings, n) {
  strings.sort();
  return strings.sort((a, b) => a[n].charCodeAt(0) - b[n].charCodeAt(0));
}
