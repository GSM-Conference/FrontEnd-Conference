function solution(hp) {
  const 장군개미 = Math.floor(hp / 5);
  const 병정개미 = Math.floor((hp - 장군개미 * 5) / 3);
  const 일개미 = hp - (장군개미 * 5 + 병정개미 * 3);
  return 장군개미 + 병정개미 + 일개미;
}
