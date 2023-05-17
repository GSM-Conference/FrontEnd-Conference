function solution(numbers) {
  let answer = [];

  while (numbers.length > 0) {
    for (let i = 1; i < numbers.length; i++) {
      answer.push(numbers[0] + numbers[i]);
    }
    numbers.shift();
  }
  return [...new Set(answer)].sort((a, b) => a - b);
}

function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
      if (i !== j) answer.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(answer)].sort((a, b) => a - b);
}
