function solution(s) {
  let result = 0;
  const length = s.length;
  let isEnd = false;
  for (let i = 0; i < length; i++) {
    if (s.length === 0) isEnd = true;
    const key = s[0];
    let cnt = [0, 0];
    for (let j = 0; j < s.length; j++) {
      key === s[j] ? cnt[0]++ : cnt[1]++;
      if (cnt[0] === cnt[1]) {
        result++;
        s = s.slice(j + 1);
        break;
      }
    }
  }
  return isEnd ? result : result + 1;
}
