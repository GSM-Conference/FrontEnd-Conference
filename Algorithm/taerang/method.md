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

### Substring

    string에서 자르고싶은 시작위치(start)부터 끝위치(end)까지 반환.
    end는 생략 가능하며 생략할 경우 문자열 끝까지 자른다.

    ex) string.substring(start,end)

##### 예제

```js
const str = "나는 치킨이 좋아";

const result1 = str.substring(0, 2); // '나는'
const result2 = str.substring(2, 4); // ' 치'
const result3 = str.substring(2); // ' 치킨이 좋아'
```

    substring()은 start 인덱스부터 end 인덱스 전까지 반환을 하기 때문에 substring(0,1)의 경우
    0번 인덱스에서부터 1번인덱스 이전에 문자를 반환한다. (1번 인덱스에 문자는 반환하지 않음)

```js
const str = "가나다라";

const result = str.substring(0, 2); // 결과 : "가나"
// 각 단어 인덱스 가[0] 나[1] 다[2] 라[3]
```
