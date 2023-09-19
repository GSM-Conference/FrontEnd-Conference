function solution(my_string) {
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    const char = my_string[i];

    if (char >= "a" && char <= "z") {
      answer += char.toUpperCase();
    } else if (char >= "A" && char <= "Z") {
      answer += char.toLowerCase();
    } else {
      answer += char;
    }
  }

  return answer;
}
