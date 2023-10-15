function solution(arr, queries) {
  return queries.reduce(
    (bucket, [s, e, k]) => {
      for (let i = s; i <= e; i += 1) {
        if (i % k === 0) bucket[i] += 1;
      }
      return bucket;
    },
    [...arr]
  );
}
