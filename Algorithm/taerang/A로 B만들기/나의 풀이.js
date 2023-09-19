function solution(before, after) {
  before = [...before].sort();
  after = [...after].sort();

  for (let i = 0; i < before.length; i++) {
    if (before[i] !== after[i]) return 0;
  }
  return 1;
}
