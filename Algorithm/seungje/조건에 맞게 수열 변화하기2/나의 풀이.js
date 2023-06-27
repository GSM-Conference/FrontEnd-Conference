function solution(arr) {
  let answer = 0;
  let newArr = [...arr];
  for (let i = 0; ; i++) {
    const prev = [...newArr];
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] >= 50 && newArr[j] % 2 === 0) newArr[j] = newArr[j] / 2;
      else if (newArr[j] < 50 && newArr[j] % 2 === 1)
        newArr[j] = newArr[j] * 2 + 1;
    }
    if (JSON.stringify(prev) == JSON.stringify(newArr)) {
      answer = i;
      break;
    }
  }
  return answer;
}
