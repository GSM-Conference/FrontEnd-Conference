function solution(my_string, queries) {
  let str = my_string.split("");
  queries.forEach(([start, end]) => {
    const changeStr = str.slice(start, end + 1);
    str.splice(start, changeStr.length, ...changeStr.reverse());
  });
  return str.join("");
}
