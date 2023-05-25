# method

### reduce

- #### 함수를 실행하고 하나의 결과값을 반환
- #### reduce는 줄이다 라는 뜻이며, 누산기라고 할 수 있다.

#### 누산기란?

    컴퓨터의 중앙 처리 장치(CPU)에서 중간 산술 논리 장치 결과가 저장되는 레지스터이다.

- ##### `acc` accumulator : 누산기, 누적되는 값, 최종적으로 출력되는 값

* ##### `cur` current : 현재 돌고 있는 요소

```js
const numbers = [4, 3, 2, 1];
let sum = numbers.reduce((acc, cur) => acc + cur);
```

### Sort

##### sort 메서드는 배열의 요소를 정렬하는데 사용하는 함수이다.

```js
const String = ["b", "c", "a"];
String.sort();

console.log(String); => ["a", "b", "c"];
```

Sort()는 기본적으로 유니코드값으로 정렬하기 때문에 예상과 다르게
19,3,30,9,5로 정렬되는 모습을 확인할 수 있다.

```js
Digit.sort((previous, current) => previous - current); //오름차순
Digit.sort((previous, current) => current - previous); //내림차순
```

### Slice

##### `slice()` 함수는 배열로 부터 특정 범위를 복사한 값들을 담고 있는 새로운 배열을 만드는데 사용합니다.

    첫번째 인자 : 시작 index
    두번째 인자 : 종료 index

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
nums.slice(5, 10)[(5, 6, 7, 8, 9)];
```
