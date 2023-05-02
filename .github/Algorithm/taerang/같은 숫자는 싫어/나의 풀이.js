function solution(arr) {
  let result = [],
    answer;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      result.push(arr[i]);
    }
  }

  answer = result; //return은 answer;

  return result;
}
