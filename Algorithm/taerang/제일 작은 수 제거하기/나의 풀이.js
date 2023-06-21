function solution(arr) {
  let answer = arr.slice();
  let min = arr[0];

  if (answer.length === 1) {
    answer = [-1];
  } else {
    for (let i = 1; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
      }
    }

    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === min) {
        answer.splice(i, 1);
        break;
      }
    }
  }

  return answer;
}
