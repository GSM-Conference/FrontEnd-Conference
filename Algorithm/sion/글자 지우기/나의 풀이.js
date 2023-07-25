function solution(my_string, indices) {
  return my_string
    .split("")
    .filter((v, i) => !indices.includes(i))
    .join("");
}
