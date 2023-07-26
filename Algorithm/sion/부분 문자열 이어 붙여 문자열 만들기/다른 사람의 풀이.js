function solution(my_strings, parts) {
  return parts
    .map(([s, e], i) => {
      return my_strings[i].slice(s, e + 1);
    })
    .join("");
}

function solution(my_strings, parts) {
  return my_strings.reduce((result, str, i) => {
    const [s, e] = parts[i];
    return result + str.substring(s, e + 1);
  }, "");
}
