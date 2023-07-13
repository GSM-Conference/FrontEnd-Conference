solution = (st, s, e) =>
  st.slice(0, s) +
  st
    .slice(s, e + 1)
    .split("")
    .reverse()
    .join("") +
  st.slice(e + 1);
