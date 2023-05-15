function solution(s) {
  let answer = "";
  let counter = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (counter[char]) {
      counter[char]++;
    } else {
      counter[char] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (counter[char] === 1) {
      answer += char;
    }
  }

  let result = answer.split("").sort().join(""); // 사전 순으로 정렬

  return result;
}
