function solution(s) {
  let arr = s.split(" ");
  let result = [0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Z") {
      result.pop();
    } else result.push(Number(arr[i]));
  }

  return result.reduce((prev, acc) => prev + acc);
}
