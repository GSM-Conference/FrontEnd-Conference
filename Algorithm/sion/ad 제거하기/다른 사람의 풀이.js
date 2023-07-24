function solution(strArr) {
  strArr = strArr.filter((x) => {
    return x.indexOf("ad") == -1;
  });

  return strArr;
}
