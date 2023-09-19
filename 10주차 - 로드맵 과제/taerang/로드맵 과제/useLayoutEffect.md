# useLayoutEffect란 무엇일까❓

##### 리액트 문서에 따르면 useLayoutEffectuseEffect브라우저가 화면을 다시 그리기 전에 실행되는 버전이라고 한다.

## 참조

#### `useLayoutEffect(setup, dependencies?)`

`useLayoutEffect useEffect`브라우저가 화면을 다시 그리기 전에 실행되는 버전이다.

```js
import { useState, useRef, useLayoutEffect } from 'react';

function Tooltip() {
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []);

```

## 용법

#### 브라우저가 화면을 다시 그리기 전에 레이아웃 측정 (렌더링 법)

- ##### 1. 어디에서나 도구 설명을 렌더링을 한다.

* ##### 2. 높이를 측정하고 툴팁을 배치할 위치를 결정을 한다.

- ##### 3. 툴팁을 올바른 위치에 다시 렌더링을 한다.

이 모든 작업은 브라우저가 화면을 다시 그리기 전에 발생해야한다.

```js
function Tooltip() {
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0); // You don't know real height yet

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height); // Re-render now that you know the real height
  }, []);

  // ...use tooltipHeight in the rendering logic below...
}
```

    위와 같은 코드는 단계별로 작동을 하게 되는데 방법은 아래와 같다.

- ##### 1. Tooltip이니셜로 렌더링합니다 tooltipHeight = 0 (따라서 도구 설명이 잘못 배치될 수 있음).
- ##### 2. React는 이를 DOM에 배치하고 useLayoutEffect.
- ##### 3. useLayoutEffect 도구 설명 내용의 높이를 측정 하고 즉시 다시 렌더링을 트리거합니다.
- ##### 4. Tooltip실제와 함께 다시 렌더링합니다 tooltipHeight(툴팁이 올바르게 배치되도록).
- ##### 5. React는 DOM에서 이를 업데이트하고 브라우저는 마침내 툴팁을 표시합니다.
