const solution = (num_list, n) => {
  return num_list.filter((el, idx) => (idx < n - 1 ? false : el));
};
