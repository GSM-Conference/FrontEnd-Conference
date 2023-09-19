function solution(arr, delete_list) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < delete_list.length; j++) {
      if (arr[i] === delete_list[j]) {
        delete arr[i];
      }
    }
  }

  result = arr.filter((v) => v);

  return result;
}
