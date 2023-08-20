function solution(list) {
  return list.reduce(
    (acc, cur) => (cur & 1 ? acc[1]++ : acc[0]++, acc),
    [0, 0]
  );
}
