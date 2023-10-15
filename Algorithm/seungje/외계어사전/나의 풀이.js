function solution(spell, dic) {
  for (let i = 0; i < dic.length; i++) {
    if (spell.length !== dic[i].length) continue;
    spell.forEach((j, k) => (dic[i] = dic[i].replace(j, "")));
    if (dic[i].length === 0) return 1;
  }
  return 2;
}
