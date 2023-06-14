function solution(price) {
  return price >= 500000
    ? parseInt((price * 8) / 10)
    : price >= 300000
    ? parseInt((price * 9) / 10)
    : price >= 100000
    ? parseInt((price * 19) / 20)
    : price;
}
