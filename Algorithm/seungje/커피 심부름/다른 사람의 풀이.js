const solution = (order) =>
  order.reduce((acc, cur) => acc + (cur.includes("latte") ? 5000 : 4500), 0);
