const string = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function solution(s) {
  let answer = [];
  let currentString = "";

  for (let i = 0; i < s.length; i++) {
    if (Number(s[i]) || Number(s[i]) === 0) {
      answer.push(Number(s[i]));
    } else {
      currentString += s[i];
    }

    if (string[currentString] || string[currentString] === 0) {
      answer.push(string[currentString]);
      currentString = "";
    }
  }

  return Number(answer.join(""));
}
