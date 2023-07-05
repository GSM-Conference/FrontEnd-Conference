function solution(keyinput, board) {
  let answer = [0, 0];

  const width = Math.floor(board[0] / 2);
  const height = Math.floor(board[1] / 2);

  for (let i = 0; i < keyinput.length; i++) {
    switch (keyinput[i]) {
      case "left":
        if (answer[0] - 1 >= -width) answer[0]--;
        break;
      case "right":
        if (answer[0] + 1 <= width) answer[0]++;
        break;
      case "up":
        if (answer[1] + 1 <= height) answer[1]++;
        break;
      case "down":
        if (answer[1] - 1 >= -height) answer[1]--;
        break;
    }
  }

  return answer;
}
