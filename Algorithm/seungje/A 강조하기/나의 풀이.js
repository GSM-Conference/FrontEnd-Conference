function solution(myString) {
  let answer = "";
  for (let i = 0; i < myString.length; i++)
    answer +=
      myString[i] === "a" || myString[i] === "A"
        ? "A"
        : myString[i] === myString[i].toUpperCase()
        ? myString[i].toLowerCase()
        : myString[i];
  return answer;
}
