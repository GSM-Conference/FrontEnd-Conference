const solution = (arr1, arr2) => {
  return arr1.length !== arr2.length
    ? compare(arr1.length, arr2.length)
    : compare(arr1, arr2, "reduce");
};

const compare = (a, b, option) => {
  if (option === "reduce") {
    a = a.reduce((acc, cur) => acc + cur);
    b = b.reduce((acc, cur) => acc + cur);
  }
  return a > b ? 1 : a < b ? -1 : 0;
};
