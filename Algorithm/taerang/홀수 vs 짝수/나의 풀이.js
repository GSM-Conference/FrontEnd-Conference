function solution(num_list) {
  let odd = 0;
  let even = 0;
  let answer = 0;

  for (let i = 1; i <= num_list.length; i++) {
    if (i % 2 === 0) {
      odd += num_list[i - 1];
    } else {
      even += num_list[i - 1];
    }
  }

  if (odd > even) {
    answer = odd;
  } else {
    answer = even;
  }

  return answer;
}
