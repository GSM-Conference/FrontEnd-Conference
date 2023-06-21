function solution(arr, query) {
  let start = 0,
    end = arr.length;
  for (let i = 0; i < query.length; i++) {
    i % 2 ? (start += query[i]) : (end = start + query[i]);
  }

  return start === end ? [-1] : arr.slice(start, end);
}
