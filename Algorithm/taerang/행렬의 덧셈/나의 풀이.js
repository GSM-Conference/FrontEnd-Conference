function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let result = []; //push를 할 새로운 배열을 생성
    for (let j = 0; j < arr2[i].length; j++) {
      result.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(result); //배열 안에 push한 값을 result함수에 push한다.
  }
  return answer;
}
