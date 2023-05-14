function solution(str_list) {
  let l = str_list.indexOf("l") === -1 ? 21 : str_list.indexOf("l");
  let r = str_list.indexOf("r") === -1 ? 21 : str_list.indexOf("r");
  if (!str_list.includes("l") && !str_list.includes("r")) return [];

  if (l < r) {
    return str_list.slice(0, l);
  } else if (l > r) {
    return str_list.splice(r + 1, str_list.length);
  }
}
