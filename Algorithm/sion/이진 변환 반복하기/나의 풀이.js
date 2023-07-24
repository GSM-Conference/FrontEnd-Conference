function solution(s) {
  let count = 0,
    filterCount = 0;

  while (s !== "1") {
    count += 1;
    filterCount += s.replaceAll("1", "").length;
    s = s.replaceAll("0", "").length.toString(2);
  }

  return [count, filterCount];
}
