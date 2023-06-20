function solution(dots) {
  var [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots
    .sort((a, b) => a[0] - b[0])
    .sort((a, b) => a[1] - b[1]);

  const width = x1 - x2;
  const height = y3 - y2;

  return Math.abs(width * height);
}
