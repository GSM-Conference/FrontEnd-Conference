function solution(num_list) {
  let lastIndex = num_list.length - 1;
  let lastValue = num_list[lastIndex];
  let value = num_list[lastIndex - 1];

  num_list.push(lastValue > value ? lastValue - value : lastValue * 2);
  return num_list;
}
