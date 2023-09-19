## React.memo 그게 도대체 뭔데❓

### 리액트 메모란 변하지않는 props에 의한 리렌더링을 막는 것 ❗️

    예를들어 text 컴포넌트와 count 컴포넌트가 있다.
    둘은 props로 text값과 num값을 갖을 것 이다. 이때 text가 바뀌면 text컴포넌트가 리렌더링되는 것은 당연하지만
    count 컴포넌트는 리렌더링이 될 필요가 없다. 이러한 상황에서 React.memo를 사용해서 count 컴포넌트의 리렌더링을 막을 수 있다!!!

## 사용법을 알아보자!!

```js
//예시

const Count = ({ count }) => {
  return <div>{count}</div>;
};

const Text = ({ text }) => {
  return <div>{text}</div>;
};
```

##### Count와 Text 컴포넌트가 있고 props를 받고 있다.

- ### React.Memo를 적용하면?

```js
const Count = React.memo(({ count }) => {});

const Text = React.memo(({ text }) => {
  return <div>{text}</div>;
});

//함수 전체를 React.memo로 감싸주고, props로 받는 괄호 앞에 써주면 된다.
```

## 얕은 복사에 React.memo

- ##### 1. areEqual은 props로 현재의 props와 그 다음의 props를 받는다.
- ##### 2. areEqual은 결과 값이 true라면 리렌더링 하지 않고 fasle라면 리렌더링 한다.
- ##### 3. 즉 props 둘이 같다면 리렌더링을 시키지 않고 둘이 다르다면 리렌더링을 실행한다.

## 사용법을 알아보자!!

```js
//먼저 객체를 받는 컴포넌트를 만든다.
const CountA = ({ count }) => {
  return <div>{count}</div>;
};

const CountB = ({ obj }) => {
  return <div>{obj.count}</div>;
};

//CountA는 그냥 변수인 count를 props로 받고 CountB는 객체 안속 count 인 obj.count를 받는다.
//이때 obj.count는 CountA의 count와 똑같은 변수이다. 즉 얕은복사이다.
```

```js
const areEqual = (prevProps, nextProps) => {
  // 현재의 props와 다음 props가 같으면 true를 return한다.
  // true라면 리렌더링 하지 않고 fasle라면 리렌더링 한다.
  return prevProps.obj.count === nextProps.obj.count;
};

//새로운 변수를 만들어 얕은 복사를 당한 컴포넌트와 areEqual을 넣어주고 React.memo를 실행한다.
```

## 많은 코드에 React.memo 적용법

```js
//맨 마지막 export default CountA 라는 부분을 React.memo로 감싸주면 된다!!!!!!!!!!!
export default React.memo(CountA);
```
