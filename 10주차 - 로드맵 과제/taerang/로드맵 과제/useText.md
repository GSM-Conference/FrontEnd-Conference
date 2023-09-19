# useText란 무엇일까❓

#### `useContext`구성 요소에서 컨텍스트를 읽고 구독할 수 있는 React Hook이다.

```js
const value = useContext(SomeContext);
```

## 참조

#### `useContext(SomeContext)`

`useContext`구성 요소의 최상위 수준에서 호출하여 컨텍스트를 읽고 구독합니다.

```js
import { useContext } from 'react';

function MyComponent() {
  const theme = useContext(ThemeContext);
  // ...
```

## 매개변수

- ##### `SomeContext`: 이전에 만든 컨텍스트. `createContext` <br/>컨텍스트 자체는 정보를 보유하지 않고 구성 요소에서 제공하거나 읽을 수 있는 종류의 정보만 나타낸다.

### 보고

    useContext호출 구성 요소의 컨텍스트 값을 반환을 한다.
    트리에서 호출 구성 요소 위의 value가장 가까운 항목에 전달된 것으로 결정이 되고,
    SomeContext.Provider그러한 공급자가 없으면 반환된 값은 해당 컨텍스트에 대해 defaultValue가 된다.

## 용법

### 데이터를 트리에 깊이 전달

`useContext`구성 요소의 최상위 수준에서 호출하여 컨텍스트를 인식하게 된다.

```js
import { useContext } from 'react';

function Button() {
  const theme = useContext(ThemeContext);

//useContext전달한 컨텍스트 에 대한 컨텍스트 값을 반환한다.
//컨텍스트 값을 결정하기 위해 React는 구성 요소 트리를 검색한다.
//해당 특정 컨텍스트에 대해 위에서 가장 가까운 컨텍스트 공급자를 찾는다.
//컨텍스트를 에 전달하려면 Button해당 컨텍스트 공급자로 컨텍스트 또는 상위 구성 요소 중 하나를 래핑!!
```

##### `Button` 어디 에서 Form호출 하면 값으로 `useContext(ThemeContext)`수신됩니다 ."dark"

## 컨텍스트를 통해 전달된 데이터 업데이트

    가끔 컨텍스트가 시간이 지남으로 변경이 되기로 원할 것이다. 컨텍스트를 업데이트 하기 위해서는 상태와 결합을
    해야하는데, 상위 구성 요소에서 상태 변수를 선언하고 현재 상태를 컨텍스트 값으로 공급자에게 전달한다.

```js
function MyPage() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <Button
        onClick={() => {
          setTheme("light");
        }}
      >
        Switch to light theme
      </Button>
    </ThemeContext.Provider>
  );
}

//이제 Button공급자 내부의 모든 항목이 현재 값을 받게 된다.
```

## 대체 기본값 지정

    React가 부모 트리에서 특정 컨텍스트 의 공급자를 찾을 수 없는 경우 반환되는 컨텍스트 값은
    해당 컨텍스트를 만들 때 지정한 기본값useContext()과 같다.

```js
const ThemeContext = createContext(null);

//기본 값은 변하지 않는다. 컨텍스트를 업데이트하기 위해서 위와 같이 사용을 한다.
```

#### null기본값으로 사용할 수 있는 좀 더 의미 있는 값이 있기도 하다.

```js
const ThemeContext = createContext("light");

//위와 같이 코드를 작성하면 공급자가 없이 일부 구성 요소를 실수로 렌더링해도 중단이 되지 않는다.
```

## 트리의 일부에 대한 컨텍스트 재정의

##### 다른 값을 사용하여 공급자에서 해당 부분을 래핑하여 트리 부분의 컨텍스트를 재정의를 할 수도 있다.

```js
<ThemeContext.Provider value="dark">
  ...
  <ThemeContext.Provider value="light">
    <Footer />
  </ThemeContext.Provider>
  ...
</ThemeContext.Provider>
```
