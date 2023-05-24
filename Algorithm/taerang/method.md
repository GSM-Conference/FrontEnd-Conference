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

### Math

- #### ceil

- #### floor
