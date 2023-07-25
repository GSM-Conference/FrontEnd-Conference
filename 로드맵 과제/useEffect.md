# useEffect가 무엇일까❓

#### `useEffect`는 구성 요소를 외부 시스템과 동기화할 수 있는 React Hook이다.

## 참조

#### `useEffect(setup, dependencies?`

useEffect는 구성 요소의 최상위 수준에서 호출을 하여 Effect는 선언을 합니다.

```js
import { useEffect } from "react";
import { createConnection } from "./chat.js";

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}
```

##### 현재 위와 같은 예시는 ChatRoom이라는 함수 내에서 최상단위에서 실행하고 있는 것이다.

### 매개 변수

#### setup

    Effect의 논리가 포함이 된 함수이다.
    컴포넌트가 DOM에 추가되면 React가 설정 기능을 실행이 가능하고, 변경된 종속성을 사용을 하여 다시 렌더링을 할 때마다
    React는 그 이전의 값을 정리하는 기능을 실행하고 새로운 값으로 설정 기능을 실행합니다.

#### optional`dependencies`

    코드 내부에서 참조되는 모든 반응 값 목록 setup, 반응형 값에는 구성 요소 본체 내에서 직접 선언된
    소품, 상태 및 모든 변수와 함수가 포함이 된다.

## 용법

### 외부 시스템에 연결

    일부 구성 요소는 페이지에 표시되는 동안 네트워크, 일부 브라우저 API 또는 타사 라이브러리에 연결된 상태를 유지해야 한다.
    이러한 시스템은 React에 의해 제어되지 않으므로 외부라고 부른다.

```js
import { useEffect } from "react";
import { createConnection } from "./chat.js";

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}
```

#### useEffect는 다음 두 개의 인수를 전달해야 한다.

- ##### 1. 해당 시스템에 연결하는 설정 코드가 있는 설정 기능 (정리 코드가 있는 정리 함수를 반환)

* ##### 2. 해당 함수 내에서 사용되는 구성 요소의 모든 값을 포함하는 종속성 목록이다.

- ##### 3. 구성 요소가 페이지에서 제거(마운트 해제)된 후 정리 코드가 마지막으로 한 번 실행이 된다.

### Note

- ##### setInterval()및 로 관리되는 타이머입니다 clearInterval()

* ##### window.addEventListener()및 를 사용한 이벤트 구독 window.removeEventListener()

- ##### animation.start()및 와 같은 API가 포함된 타사 애니메이션 라이브러리입니다 animation.reset()

      외부 시스템에 연결하지 않은 경우 Effect가 필요하지 않을 수 있다.

## 사용자 지정 후크의 래핑 효과

    "React 외부로 나가야" 할 때와 사용 사례에 더 나은 내장 솔루션이 없을 때 사용한다.
    Effect를 수동으로 작성해야 하는 경우가 많다면 일반적 으로 구성 요소가 의존하는 일반적인 동작을 위해
    일부 사용자 지정 Hook을 추출해야 한다는 신호이다.

```js
function useChatRoom({ serverUrl, roomId }) {
  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);
}

//그런 다음 다음과 같은 구성 요소에서 사용한다.
function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useChatRoom({
    roomId: roomId,
    serverUrl: serverUrl
  });
```

## 반응적 종속성 지정

`Effect`의 종속성은 선택 할 수 없고, Effect의 코드에서 사용하는 모든 반응 값은 종속성으로 선언되어야 한다.
효과의 종속성 목록은 주변 코드에 의해 결정이 된다.

```js
function ChatRoom({ roomId }) {
  // This is a reactive value
  const [serverUrl, setServerUrl] = useState("https://localhost:1234"); // This is a reactive value too

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId); // This Effect reads these reactive values
    connection.connect();
    return () => connection.disconnect();
  }, [serverUrl, roomId]); // ✅ So you must specify them as dependencies of your Effect
  //둘 중 하나 serverUrl또는 roomId변경하면 효과가 새 값을 사용하여 채팅에 다시 연결이 된다.
}
```

    반응형 값에는 구성 요소 내부에 직접 선언된 소품과 모든 변수 및 함수가 포함이 된다.
    roomId및이므로serverUrl종속성에서 제거할 수 없고, 이를 생략하려고 하고 린터가 React에 맞게 올바르게
    구성되어 있으면 린터는 이를 수정해야 하는 실수로 표시를 한다.

## Effect의 이전 상태를 기반으로 상태 업데이트

#### 문제 예시

```js
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1); // You want to increment the counter every second...
    }, 1000);
    return () => clearInterval(intervalId);
  }, [count]); // 🚩 ... but specifying `count` as a dependency always resets the interval.
  //반응 값 이므로 count종속성 목록에 지정해야한다.
  //그러나 이로 인해 변경될 때마다 Effect가 정리되고 다시 설정이 되고, count. 이것은 이상적이지 않다.
}
```

## 불필요한 개체(함수) 종속성 제거

    효과가 렌더링 중에 생성된 객체 또는 함수에 의존하는 경우 너무 자주 실행될 수 있기에
    options예를 들어 이 효과는 렌더링할 때마다 개체가 다르기 때문에 렌더링할 때 마다 다시 연결이 된다.

```js
const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  const options = { // 🚩 This object is created from scratch on every re-render
    serverUrl: serverUrl,
    roomId: roomId
  };

  useEffect(() => {
    const connection = createConnection(options); // It's used inside the Effect
    connection.connect();
    return () => connection.disconnect();
  }, [options]); // 🚩 As a result, these dependencies are always different on a re-render
```
