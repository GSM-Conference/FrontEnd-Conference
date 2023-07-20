function calc(num) {
  let count = 0;
  while (num !== 1) {
    num % 2 === 0 ? (num /= 2) : (num = (num - 1) / 2);
    count++;
  }

  return count;
}

function solution(num_list) {
  return num_list.map((v) => calc(v)).reduce((acc, pre) => acc + pre);
}
