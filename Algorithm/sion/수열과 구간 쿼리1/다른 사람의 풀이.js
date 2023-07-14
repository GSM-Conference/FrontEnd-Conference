function solution(arr, queries) {
  queries.forEach(([s, e]) => {
    while (s <= e) arr[s++]++;
  });
  return arr;
}
