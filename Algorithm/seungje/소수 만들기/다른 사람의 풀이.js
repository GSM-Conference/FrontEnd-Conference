function primecheck(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
function solution(nums) {
  var cnt = 0;
  for (var i = 0; i < nums.length - 2; i++) {
    for (var j = i + 1; j < nums.length - 1; j++) {
      for (var w = j + 1; w < nums.length; w++) {
        //console.log(nums[i]+"/"+nums[j]+"/"+nums[w]);

        if (primecheck(nums[i] + nums[j] + nums[w])) {
          //console.log(nums[i]+nums[j]+nums[w]);
          cnt++;
        }
      }
    }
  }
  return cnt;
}
