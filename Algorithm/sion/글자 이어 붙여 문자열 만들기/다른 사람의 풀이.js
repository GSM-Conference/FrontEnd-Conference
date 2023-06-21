function solution(my_string, index_list) {
  return index_list.map((i) => my_string[i]).join("");
}

function solution(my_string, index_list) {
  let str = "";
  index_list.forEach((el) => {
    str += my_string.charAt(el);
  });
  return str;
}
