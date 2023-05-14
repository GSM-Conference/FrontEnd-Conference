function solution(x) {
  let cnt = 0;
  String(x)
    .split("")
    .forEach((i) => {
      cnt += parseInt(i);
    });
  return x % cnt === 0;
}
