function solution(m) {
  let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let a = [];
  a.length = 52;
  a.fill(0);

  m.split("").map((n) => {
    a[al.indexOf(n)] += 1;
  });

  return a;
}

function solution(str) {
  return [...str].reduce(
    (p, c) => (p[c.charCodeAt() - (c === c.toLowerCase() ? 71 : 65)]++, p),
    Array(52).fill(0)
  );
}
