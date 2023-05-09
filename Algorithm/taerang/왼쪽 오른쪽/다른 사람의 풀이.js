function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "l") return arr.slice(0, i);
    if (arr[i] === "r") return arr.slice(i + 1);
  }
  return [];
}
