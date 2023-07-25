# useReducer란 무엇일❓

#### `useReducer`컴포넌트에 리듀서를 추가할 수 있는 React Hook이다.

```js
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

## 참조

#### `useReducer(reducer, initialArg, init?)`

useReducer리듀서로 상태를 관리하려면 구성 요소의 최상위 수준에서 호출을 해야한다.

```js
//예시
import { useReducer } from 'react';

function reducer(state, action) {
  // ...
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { age: 99999 });
```

## 매개변수

- ##### `reducer`: 상태가 업데이트되는 방식을 지정하는 감속기 함수이며, 상태와 작업은 모든 유형이여야 한다.

* ##### `ìnitialArg`: 초기 상태가 계산되는 값입니다. 모든 유형의 값이 될 수 있다.

- ##### `optional init`: 초기 상태를 반환해야 하는 초기화 함수이며, 지정을 안 하면 초기 상태로 설정이 된다.

## 보고

#### `useReducer`정확히 두 개의 값을 가진 배열을 반환을 한다.

- ##### 1. 현재 상태로 `init(initialArg)`첫 번째 렌더링 중에는 or로 설정이 된다.`initialArg`( 없는 경우 `init`).

- ##### 2. 상태를 다른 값으로 업데이트하고 다시 렌더링을 트리거할 수 있는 기능 `dispatch`이다.

## `dispatch`기능

    dispatch에서 반환한 함수를 사용하면 상태 useReducer를 다른 값으로 업데이트하고 다시 렌더링을 트리거를 하고,
    함수에 대한 유일한 인수로 작업을 전달해야 한다.

```js
const [state, dispatch] = useReducer(reducer, { age: 42 });

function handleClick() {
  dispatch({ type: 'incremented_age' });
  // ...
```

##### reducerReact는 현재와 함께 제공한 함수 state와 전달한 작업을 호출한 결과로 다음 상태를 설정한다. dispatch.

### 매개변수 (action❓)

    사용자가 수행한 작업. 모든 유형의 값이 될 수 있고,
    type일반적으로 작업은 일반적으로 작업 을 식별하는 속성과 선택적으로 추가 정보가 있는 다른 속성이 있는 개체이다.

## 보고

`dispatch`함수에는 반환 값이 없음을 주의!!

## 용법

### 컴포넌트에 리듀서 추가 ➕

#### `useReducer`리듀서로 상태를 관리하려면 구성 요소의 최상위 수준에서 호출하기

```js
import { useReducer } from 'react';

function reducer(state, action) {
  // ...
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { age: 123413123});
  //useReducer정확히 두 개의 항목이 있는 배열을 반환을 한다.

  //상태 변수의 현재 상태는 초기에 사용자 가 제공한 초기 상태 로 설정
  //상호 작용에 반응하여 변경할 수 있는 dispatch기능
```

##### 화면에 표시되는 내용을 업데이트하려면 dispatch사용자가 수행한 작업을 나타내는 객체(action)를 사용하여 호출

```js
function handleClick() {
  dispatch({ type: "incremented_age" });
}
```

## 리듀서 함수를 작성하는 기본 틀

```js
//감속기 함수

function reducer(state, action) {
  // ...
}
```

    그런 다음 다음 상태를 계산하고 반환할 코드를 작성을 해야한다.
    관례에 따라 switch진술문으로 작성하는 것이 일반적이며, case각각 에 대해 switch다음 상태를 계산하고 반환을 한다.

```js
//ex

function reducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}
```

    액션은 어떤 모양이든 가질 수 있고, type규칙에 따라 작업을 식별하는 속성 과 함께 개체를 전달하는 것이 일반적이다.
    리듀서가 다음 상태를 계산하는 데 필요한 최소한의 정보를 포함을 한다.

```js
function Form() {
  const [state, dispatch] = useReducer(reducer, { name: 'Taylor', age: 42 });

  function handleButtonClick() {
    dispatch({ type: 'incremented_age' });
  }

  function handleInputChange(e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value
    });
  }
  // ...
```

## 초기 상태 재생성 방지

#### React는 초기 상태를 한 번 저장하고 다음 렌더링에서 무시한다.

```js
function createInitialState(username) {
  // ...
}

function TodoList({ username }) {
  const [state, dispatch] = useReducer(reducer, createInitialState(username));
  // ...

  //결과적으로는 createInitialState(username)가 초기 렌더링에만 사용되지만 여전히 모든 렌더링에서 이 함수를 호출을 하고 있다.
  //큰 배열을 만드는 것을 여러 의미에서 비효율적으로 나타난다.
```

#### 위 주석과 같은 문제를 해결을 하기 위해 나온 초기화 함수로 전달을 하는 법

```js
function createInitialState(username) {
  // ...
}

function TodoList({ username }) {
  const [state, dispatch] = useReducer(reducer, username, createInitialState);
```

### 마치며

    useRef라는 개념이 처음에는 되게 어렵게 느껴졌는데 문서를 보면서 공부해보니까 새로운 점을 알게 되어서 좋았다.
