function solution(my_string, is_prefix) {
  return Number(is_prefix === my_string.substring(0, is_prefix.length));
}
