function arrayEquals(arr1, arr2) {
  // 배열이 같다면 true 다르다면 false
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length - 1; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function calculate(arr) {
  return arr.map((v) => {
    if (v % 2 === 0 && v > 50) {
      return v / 2;
    } else if (v % 2 !== 0 && v < 50) {
      return v * 2 + 1;
    } else return v;
  });
}

function solution(arr) {
  let newArr = [];
  let count = 0;

  // 배열이 같지 않을때까지 실행
  while (!arrayEquals(arr, newArr)) {
    newArr = arr;
    arr = calculate(arr);
    count++;
  }

  return count - 1;
}
