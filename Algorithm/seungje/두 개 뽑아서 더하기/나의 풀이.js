function solution(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    numbers.forEach((j, k) => {
      if (i !== k) result.push(numbers[i] + j);
    });
  }
  return result.filter((v, i) => result.indexOf(v) === i).sort((a, b) => a - b);
}
