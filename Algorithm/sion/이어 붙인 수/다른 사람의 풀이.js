function solution(num_list) {
  const { odds, evens } = num_list.reduce(
    ({ odds, evens }, num) => {
      if (num % 2 === 0) {
        evens.push(num);
      } else {
        odds.push(num);
      }
      return { odds, evens };
    },
    { odds: [], evens: [] }
  );
  return Number(odds.join("")) + Number(evens.join(""));
}
