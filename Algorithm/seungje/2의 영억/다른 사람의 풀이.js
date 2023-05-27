function solution(arr) {
  const from = arr.indexOf(2);
  const end = arr.lastIndexOf(2);

  return from === -1 ? [-1] : arr.slice(from, end + 1);
}
