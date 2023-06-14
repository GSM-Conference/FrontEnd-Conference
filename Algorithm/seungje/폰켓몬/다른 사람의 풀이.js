function solution(nums) {
  const kinds = nums.filter((val, idx) => nums.indexOf(val) === idx).length;
  const pick = nums.length / 2;

  const answer = kinds <= pick ? kinds : pick;
  return answer;
}
