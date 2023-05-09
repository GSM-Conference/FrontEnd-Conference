function solution(my_string, target) {
  let result;
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === target[0]) {
      result = my_string.slice(i, target.length + i);
      if (result === target) break;
    }
  }
  return result === target ? 1 : 0;
}
