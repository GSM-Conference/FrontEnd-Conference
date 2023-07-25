# useState란 무엇일까❓

<img src=""/>

#### `useState`구성 요소에 상태 변수를 추가할 수 있는 React Hook이다.

```js
//사용법
const [state, setState] = useState(initialState);
```

## 참조

#### `useState(initialState) `

`useState`구성 요소의 최상위 수준에서 호출하여 상태 변수를 선언을 한다.

```js
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(28);
  const [name, setName] = useState('Taylor');
  const [todos, setTodos] = useState(() => createTodos());
```

위와 같은 MyComponent에 대한 배열 구조 분해를 [A, setA] 사용하는 것과 같은 상태 변수의 이름을 지정한다.

### 매겨 변수

- ##### `initialState`: 초기에 상태를 원하는 값으로, 모든 유형이 값이 될 수 있지만, 함수의 특별한 동작이 있다. (초기 렌더링 후 무시함)

  - ##### 함수를 as로 전달을 하면 `initialState`로 처리를 한다. 인수를 사용하지 않아도 되고, 모든 유형을 반환해야 한다.

  * ##### React는 구성 요소를 초기화할 때 초기화 함수를 호출하고 반환 값을 초기 상태로 저장해야한다.

### 보고

- #### `useState`정확히 두 개의 값을 가진 배열을 반환을 한다.

* ##### 1. 현재 상태. initialState첫 번째 렌더링 중에 통과한 것과 일치합니다 .
* ##### 2. 상태를 다른 값으로 업데이트하고 다시 렌더링을 트리거할 수 있는 기능 set입니다 .

## `set`같은 기능`setSomething(nextState)`은 도대체 무엇일까❓

set에서 반환한 함수를 사용하면 상태 useState를 다른 값으로 업데이트하고 다시 렌더링을 트리거 하고,
다음 상태를 직접 전달하거나 이전 상태에서 계산하는 함수를 전달할 수 있다.

```js
const [name, setName] = useState('Edward');

function handleClick() {
  setName('Taylor');
  setAge(a => a + 1);
```

- ##### `nextState`: 원하는 상태 값입니다. 모든 유형의 값이 될 수 있지만 함수에는 특별한 동작이 있습니다.
  - ##### 함수를 로 전달하면 업데이트 함수nextState 로 처리된다.
          이것은 순수해야 하고 보류 상태를 유일한 인수로 가져와야 하며 다음 상태를 반환해야 하고,
          React는 업데이트 기능을 대기열에 넣고 구성 요소를 다시 렌더링을 한다.
          다음 렌더링 동안 React는 대기 중인 모든 업데이터를 이전 상태에 적용하여 다음 상태를 계산을 한다.

## 용법

#### 구성 요소에 상태 추가

- ##### 구성 요소의 최상위 수준에서 호출하여 useState하나 이상의 상태 변수를 선언합니다.

```js
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(42);
  const [name, setName] = useState('Taylor');
```

- ##### 관례는 배열 구조 분해를 [something, setSomething]사용하는 것과 같이 상태 변수의 이름을 지정하는 것이다.

        이 상태 변수의 현재 상태는 초기에 사용자 가 제공한 초기 상태 로 설정이 되고,
        상호 작용에 따라 다른 값으로 변경할 수 있는 기능 set이다.

* ### set 방법

```js
function handleClick() {
  setName("Robin");
}
```

## 상태의 개체 및 배열 업데이트

    개체와 배열을 상태에 넣을 수 있다.
    React에서 상태는 읽기 전용으로 간주되므로 기존 객체를 변경하는 대신 교체 해야 한다!!

```js
form.firstName = "Taylor";
```

## 초기 상태 재생성 방지

### React는 초기 상태를 한 번 저장하고 다음 렌더링에서 무시함.

```js
function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos());
```

## 상태를 함수로 설정하려고 하는데 대신 호출

#### 다음과 같은 상태에 함수를 넣을 수 없다.

```js
const [fn, setFn] = useState(someFunction);

function handleClick() {
  setFn(someOtherFunction);
}
```
