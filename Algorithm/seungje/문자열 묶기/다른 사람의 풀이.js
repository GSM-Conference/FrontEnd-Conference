function solution(strArr) {
  const mapLenCnt = {};
  {
    strArr.forEach(
      (str) => (mapLenCnt[str.length] = (mapLenCnt[str.length] || 0) + 1)
    );
  }

  let answer = 0;
  {
    for (const cnt of Object.values(mapLenCnt)) {
      if (cnt > answer) answer = cnt;
    }
  }

  return answer;
}
