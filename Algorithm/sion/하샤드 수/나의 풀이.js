function solution(x) {
  let sum = 0;

  x.toString()
    .split("")
    .forEach((element) => {
      sum += Number(element);
    });

  return x % sum === 0 ? true : false;
}

solution(18);
