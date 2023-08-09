function solution(str1, str2) {
  return str1
    .split("")
    .map((v, i) => v + str2.charAt(i))
    .join("");
}
