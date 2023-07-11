function solution(my_string, overwrite_string, s) {
  let result = "";
  for (let i = 0; i < my_string.length; i++) {
    if (i >= s && i < s + overwrite_string.length) {
      result += overwrite_string[i - s];
    } else {
      result += my_string[i];
    }
  }
  return result;
}
