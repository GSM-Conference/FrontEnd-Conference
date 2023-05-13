function solution(myString) {
  return [...myString]
    .map((str) => (["a", "A"].includes(str) ? "A" : str.toLowerCase()))
    .join("");
}

function solution(myString) {
  var answer = "";

  for (let i of myString) {
    if (i.toUpperCase() == "A") {
      answer += "A";
    } else {
      answer += i.toLowerCase();
    }
  }

  return answer;
}
