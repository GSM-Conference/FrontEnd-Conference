function solution(my_string, m, c) {
  let arr = [];
  for (let i = 0; i < my_string.length / m; i++) {
    arr.push(my_string.slice(i * m, i * m + m));
  }
  return arr.map((v) => v.charAt(c - 1)).join("");
}
