function Harshad(n) {
  return !(n % (n + "").split("").reduce((a, b) => +b + +a));
}

function solution(x) {
  let num = x;
  let sum = 0;
  do {
    sum += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);

  return !(num % sum);
}

function solution(x) {
  return x % eval([...x.toString()].join("+")) ? false : true;
}
