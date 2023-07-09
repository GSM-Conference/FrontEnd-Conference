function is_pair(s) {
  var result = s.match(/(\(|\))/g);
  return result[0] == "(" && result.length % 2 == 0 ? true : false;
}
