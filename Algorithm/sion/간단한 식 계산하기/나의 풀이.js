function solution(binomial) {
  let v = binomial.split(" ");

  switch (v[1]) {
    case "+":
      return Number(v[0]) + Number(v[2]);
    case "-":
      return Number(v[0]) - Number(v[2]);
    case "*":
      return Number(v[0]) * Number(v[2]);
  }
}
