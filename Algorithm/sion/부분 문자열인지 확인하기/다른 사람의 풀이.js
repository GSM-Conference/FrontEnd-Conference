const solution = (s, t) => +(s.indexOf(t) > -1);

function solution(my_string, target) {
  return my_string.split(target).length > 1 ? 1 : 0;
}
