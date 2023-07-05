function solution(my_string, is_suffix) {
  return Number(
    is_suffix ===
      my_string.slice(my_string.length - is_suffix.length, my_string.length)
  );
}
