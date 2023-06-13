let answer = "";

for (let i = 0; i < rsp.length; i++) {
  if (rsp[i] == "2") {
    answer += "0";
  } else if (rsp[i] == "5") {
    answer += "2";
  } else {
    answer += "5";
  }
  console.log(answer);
}
return answer;
