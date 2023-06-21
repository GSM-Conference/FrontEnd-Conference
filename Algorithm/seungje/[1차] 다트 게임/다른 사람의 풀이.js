function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 };
  let darts = dartResult.match(/\\d.?\\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(\\d{1,})([SDT])([*#])?/),
      score = Math.pow(split[1], bonus[split[2]]);

    if (split[3] !== undefined) {
      if (split[3] === "*") {
        score *= 2;

        if (i > 0) darts[i - 1] *= 2;
      } else score *= -1;
    }

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}
