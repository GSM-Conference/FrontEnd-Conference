function solution(dots) {
  let x = [],
    y = [];

  for (let pos of dots) {
    x.push(pos[0]);
    y.push(pos[1]);
  }

  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}

var s = Math.abs,
  solution = ([[a, b], [c, d], [e, f]]) =>
    s(a - (a == c ? e : c)) * s(b - (b == d ? f : d));

function solution(dots) {
  let w = [],
    h = [];
  for (let i of dots) {
    w.push(i[0]);
    h.push(i[1]);
  }
  return (Math.max(...w) - Math.min(...w)) * (Math.max(...h) - Math.min(...h));
}
