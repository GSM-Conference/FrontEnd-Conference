function solution(order) {
  return order
    .map((v) => {
      if (v.includes("cafelatte")) return 5000;
      else if (v.includes("americano")) return 4500;
      else if (v === "anything") return 4500;
    })
    .reduce((prev, acc) => prev + acc);
}
