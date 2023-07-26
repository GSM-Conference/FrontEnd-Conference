# useMemo이 무엇일까❓

#### `useMemo`리렌더링 간의 계산 결과를 캐시할 수 있는 React Hook이라고 한다.

```js
//사용법

const cachedValue = useMemo(calculateValue, dependencies);
```

## 참조

#### `useMemo(calculateValue, dependencies)`

`useMemo`다시 렌더링 사이에 계산을 캐시하려면 구성 요소의 최상위 수준에서 호출을 한다.

```js
import { useMemo } from "react";

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
```

## 매개변수

- ##### `calculateValue`: 캐시하려는 값을 계산하는 함수이며, 순수해야 하고 인수를 사용하지 않아야 하며 모든 유형의 값을 반환을 한다.

* ##### `dependencies`: 코드 내부에서 참조되는 모든 반응 값 목록이며, calculateValue`

### 보고

    초기 렌더링에서 인수 없이 useMemo호출한 결과를 반환한다.
    다음 렌더링 중에 마지막 렌더링에서 이미 저장된 값을 반환하거나(종속성이 변경되지 않은 경우) 다시 호출하고 반환된
    calculateValue결과를 반환을 한다.

## 용법

### 비용이 많이 드는 재계산 건너뛰기

##### 다시 렌더링 사이에 계산을 캐시하려면 useMemo구성 요소의 최상위 수준에서 호출로 래핑을 한다는 것이다.

```js
import { useMemo } from "react";

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
```

### 2가지를 전달해야 한다.

- ##### 1. 와 같이 인수를 사용하지 않고 계산하려는 값을 반환하는 계산 함수이다.

* ##### 2. 계산 내에서 사용되는 구성 요소 내의 모든 값을 포함하는 종속성 목록이다.

### 이것이 유용한 경우를 알아보기 위해 예제는❓

    기본적으로 React는 다시 렌더링할 때마다 구성 요소 전체를 다시 실행한다.
    예를 들어 이것이 TodoList상태를 업데이트하거나 부모로부터 새 소품을 받으면 filterTodos함수가 다시 실행이 된다.

```js
function TodoList({ todos, tab, theme }) {
  const visibleTodos = filterTodos(todos, tab);
  // ...
}
```

## 구성 요소의 다시 렌더링 건너뛰기

    경우에 따라 useMemo하위 구성 요소를 다시 렌더링하는 성능을 최적화하는 데 도움이 된다.
    이를 설명하기 위해 이 구성 요소가 자식 구성 요소에 소품으로 TodoList를 전달을 한다.

```js
export default function TodoList({ todos, tab, theme }) {
  // ...
  return (
    <div className={theme}>
      <List items={visibleTodos} />
    </div>
  );
}
//theme소품을 토글하면 앱이 잠시 정지 되지만 <List />JSX에서 제거하면 빠르게 느껴진다.
//이는 구성 요소를 최적화할 가치가 있음을 알려준다.
```

##### 기본적으로 구성 요소가 다시 렌더링되면 React는 모든 자식을 재귀적으로 다시 렌더링을 한다.

## 다른 Hook의 종속성 메모 📝

##### 구성 요소 본체에서 직접 생성된 개체에 따라 달라지는 계산이 있다고 가정을 한다.

```js
function Dropdown({ allItems, text }) {
  const searchOptions = { matchMode: 'whole-word', text };

  const visibleItems = useMemo(() => {
    return searchItems(allItems, searchOptions);
  }, [allItems, searchOptions]); // 🚩 Caution: Dependency on an object created in the component body
  //개체를 생성하는 코드 줄은 searchOptions다시 렌더링할 때마다 실행이 된다.
```

### 함수 메모

`Form`구성 요소가 에 래핑되어 있다고 가정을 하자. `memo`

```js
export default function ProductPage({ productId, referrer }) {
  function handleSubmit(orderDetails) {
    post("/product/" + productId + "/buy", {
      referrer,
      orderDetails,
    });
  }

  return <Form onSubmit={handleSubmit} />;
}
//{}다른 객체를 생성하는 것처럼 함수 선언 function() {}및 표현식은 다시 렌더링할 때마다 다른() => {} 함수를 생성을 하게 된다.
```

```js
//useMemo계산 함수가 다른 함수를 반환

export default function Page({ productId, referrer }) {
  const handleSubmit = useMemo(() => {
    return (orderDetails) => {
      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      });
    };
  }, [productId, referrer]);

  return <Form onSubmit={handleSubmit} />;
}
```
