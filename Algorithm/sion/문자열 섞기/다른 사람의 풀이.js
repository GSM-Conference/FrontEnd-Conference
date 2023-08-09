function solution(str1, str2) {
  return [...str1].map((x, idx) => x + str2[idx]).join("");
}

class Queue {
  constructor(arr) {
    this.queue = [...arr];
    this.front = 0;
    this.back = arr.length - 1;
  }
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }
  isEmpty() {
    return this.front === this.back;
  }
  show() {
    return this.queue;
  }
}

function solution(str1, str2) {
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  const queue1 = new Queue([...str1]);
  const queue2 = new Queue([...str2]);

  let answer = arr1.slice().reduce((acc, curr) => {
    const a = queue1?.dequeue() ?? "";
    const b = queue2?.dequeue() ?? "";
    return acc + a + b;
  }, "");

  if (arr2.length > 0) {
    const remain = queue2.show().join("");
    answer += remain;
  }
  return answer;
}
