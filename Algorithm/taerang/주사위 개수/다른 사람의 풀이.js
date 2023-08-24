function solution(box, n) {
  return box.map((v) => ~~(v / n)).reduce((a, v) => a * v, 1);
}
