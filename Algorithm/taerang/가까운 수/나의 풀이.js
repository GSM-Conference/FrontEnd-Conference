function solution(array, n) {
  let answer = array[0];

  for (let i = 1; i < array.length; i++) {
    let Abs = Math.abs(array[i] - n);
    let AbsAnswer = Math.abs(answer - n);

    if (Abs < AbsAnswer || (Abs === AbsAnswer && array[i] < answer)) {
      answer = array[i];
    }
  }

  return answer;
}
