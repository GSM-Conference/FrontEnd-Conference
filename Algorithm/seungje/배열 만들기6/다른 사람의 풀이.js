function solution(arr) {
  let stk = [];
  arr.forEach((x, i) => {
    if (x !== stk[stk.length - 1]) {
      stk.push(x);
    } else {
      stk.splice(-1);
    }
    //console.log("배열 추가 삭제 진행과정 : ",stk)
  });

  if (stk.length == 0) {
    stk = [-1];
  }
  return stk;
}
