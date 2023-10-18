function solution(nums) {
  let odd = 0;
  let even = 0;
  {
    for (let i = 0; i < nums.length; i++) {
      if (i % 2 === 0) odd += nums[i];
      else even += nums[i];
    }
  }

  return Math.max(odd, even);
}
