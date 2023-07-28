# useRef란 무엇일까❓

#### `useRef`렌더링에 필요하지 않은 값을 참조할 수 있는 React Hook이다.

```js
const ref = useRef(initialValue);
```

## 참조

#### `useRef(initialValue)`

`useRef`참조 를 선언하려면 구성 요소의 최상위 수준에서 호출을 한다.

```js
import { useRef } from 'react';

function MyComponent() {
  const intervalRef = useRef(0);
  const inputRef = useRef(null);
  //..
```

### 매개변수

- ##### `initialValuecurrent`: 처음에 ref 개체의 속성으로 지정하려는 값이며, 모든 유형이 값이 가능하다.<br/>이 인수는 초기 렌더링 후에 무시가 된다.

### 보고

`useRef`단일 속성을 가진 객체를 반환한다.

- ##### `currentinitialValue`: 처음에는 합격 으로 설정되어 있고, 나중에 다른 것으로 설정할 수 있다.<br/>ref 객체를 `refJSX` 노드의 속성으로 React에 전달하면 React가 해당 `current`속성을 설정합니다.

## 용법

#### ref로 값 참조하기

구성요소의 최상위 수준에서 호출하여 `useRef` 하나 이상의 참조를 선언을 하게 된다.

```js
import { useRef } from 'react';

function Stopwatch() {
  const intervalRef = useRef(0);
  // ...

  //useRef처음에 제공한 초기 값 으로 설정된 단일 속성이 있는 ref 객체를 반환을 한다.
  //다음 렌더링에서 useRef동일한 개체를 반환을 한다.
```

```js
//참조를 변경해도 다시 렌더링되지 않는다!!!
//current 속성을 수동으로 변경을 해야한다.

function handleStartClick() {
  const intervalId = setInterval(() => {
    // ...
  }, 1000);
  intervalRef.current = intervalId;
}
```

##### 나중에 clear that interval 을 호출할 수 있도록 ref에서 해당 간격 ID를 읽을 수 있습니다 .

```js
function handleStopClick() {
  const intervalId = intervalRef.current;
  clearInterval(intervalId);
}
```

#### ref를 사용하면 확인 가능한 것❗️

- ##### 재렌더링 사이에 정보를 저장
- ##### 이를 변경해도 다시 렌더링을 트리거하지 않음
- ##### 정보는 공유되는 외부 변수와 달리 구성 요소의 각 복사본에 대해 로컬임

## ref로 DOM 조작하는 법

#### 먼저 초기 값 이 다음과 같은 ref 객체를 선언을 한다.

```js
import { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);
  // ...
```

##### `ref`는 그런 다음 조작하려는 DOM노드의 JSX에 속성으로 ref객체를 전달을 한다.

```js
// ...
return <input ref={inputRef} />;
```

```js
//React가 DOM 노드를 생성, 화면에 표시한 후 ref 객체의 current속성을 해당 DOM 노드로 설정

function handleClick() {
  inputRef.current.focus();
}
```
