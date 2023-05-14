function solution(myString) {
  let answer = "";
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === "a") {
      //a이면 A로 바꾸고 answer에 대입
      answer += "A";
    } else if (
      myString[i] != "A" &&
      myString[i] === myString[i].toUpperCase()
    ) {
      //a가 아니고 대문자 -> 소문자로 변환
      answer += myString[i].toLowerCase();
    } else {
      answer += myString[i]; //둘 다 아니면 그냥 answer에 대입
    }
    console.log(answer);
  }
  return answer;
}
