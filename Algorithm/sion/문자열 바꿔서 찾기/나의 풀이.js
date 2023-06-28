function solution(myString, pat) {
  myString = myString.replaceAll("A", "C");
  myString = myString.replaceAll("B", "A");
  myString = myString.replaceAll("C", "B");
  return Number(myString.includes(pat));
}
