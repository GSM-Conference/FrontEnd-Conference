function solution(myString) {
  let result = [];
  const length = myString.length;
  for (let i = 0; i < length; i++) {
    result.push(myString.slice(0, myString.indexOf("x")).length);
    myString = myString.slice(myString.indexOf("x") + 1);
    if (!myString.includes("x")) {
      result.push(myString.length);
      break;
    }
  }
  return result;
}
