function Harshad(n) {
  return !(n % (n + "").split("").reduce((a, b) => +b + +a));
}
