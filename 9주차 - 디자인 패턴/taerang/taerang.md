## React Design Pattern

<img src="./img/design pattern.png" width="800px"/>

### Design Pattern이란?

     프로그램을 개발하는 과정에서 사용되는 설계의 패턴들을 정의한 것입니다.

#### 성장하는 개발

    과거에 비해 현재에는 다양한 개발의 스택이나 기술들이 발전을 하였다.
    현재의 화면은 더욱 과거에 비해서 복잡하고 다양한 프레임워크인 Vue, React등 다양한 기술이 등장하여
    컴포넌트 단위를 사용하여서 웹 페이지를 개발을 하고 있다는 것이다.

    여기서 더욱 효율적인 웹사이트를 구축하고 유지하기 위해서 컴포넌트 단위를 사용하게 되었다는데, 이 컴포넌트를
    어떻게 관리를 하면 좋을 것인가 이러한 문제를 많은 사람들이 고민을 하였다고 한다. 다양한 디자인 패턴으로
    프로젝트에 적용할 것인지 각 프로젝트의 특성에 맞게 고려를 해야한다.

### Control Props Pattern

    이러한 패턴은 컴포넌트를 controlled component로 바꿔준다. 외부 상태는 single source of truth,
    SSOT로 사용이 되 유저로 하여금 Custom 로직을 삽입할 수 있게끔 해준다.

#### Controlled component란

    component의 상태를 제어할 수 있는 컴포넌트를 의미한다.

#### SSOT란?

    단일 진실 공급원이라고도 번역을 하는데, 이는 모든 데이터의 요소를 한 곳에서만 제어하고 편집할 수 있는 것이다.

#### 패턴의 예시

```js
// 내부의 상태를 캡슐화하는 input
//해당 컴포넌트는 내부에서 value가 관리된다 (event.target.value)
function MyCapitalizedInput() {
  const [capitalizedValue, setCapitalizedValue] = React.useState('')

  return (
    <input
      value={capitalizedValue}
      onChange={e => setCapitalizedValue(e.target.value.toUpperCase())}
    />
  )
}​
```

##### 하지만 value값이 state를 외부에서 주입하여 사용하는 것도 가능하다.

```js
function MyTwoInputs() {
  const [capitalizedValue, setCapitalizedValue] = React.useState('')
  const [lowerCasedValue, setLowerCasedValue] = React.useState('')

  function handleInputChange(e) {
    setCapitalizedValue(e.target.value.toUpperCase())
    setLowerCasedValue(e.target.value.toLowerCase())
  }

  return (
    <>
      <input value={capitalizedValue} onChange={handleInputChange} />
      <input value={lowerCasedValue} onChange={handleInputChange} />
    </>
  )
}​
```

### 코드 분석

    위에 1번째 코드 같은 경우에는 MyCapitalizedInput 컴포넌트는 단일한 <input/> 요소를 렌더링하고
    capitalizedValue이라는 상태의 값을 사용하게 된다.

    반대로 아래 2번째 코드는 MyTwoInputs 컴포넌트는 두 개의 <input/> 요소를 렌더링하고 두 요소에 대한 상태 값인
    capitalizedValue, lowerCasedValue를 각각 사용한다.
    handleInputChange이라는 함수를 통해서 입력이 된 값이 바뀔 때 마다 호출이 되며, 입력값을 대, 소문자로 변환을 한다.

#### 왜 Control Props의 패턴을 사용하느냐?

    부모 컴포넌트에서 자식 컴포넌트로 상태의 값을 전달을 하게 되면, 부모 컴포넌트가 자식 컴포넌트의 상태를 제어(control)을
    할 수 있기 때문이다.  이 패턴을 사용하면 상위 컴포넌트에서 상태값을 변경하거나 초기화할 수 있으며, 필요에 따라 다른 동작을
    수행할 수도 있습니다.

#### 장점은?

<img src="./img/design pattern o.png"/>

- ##### 상태값 전달이 명시적이고 컴포넌트 간의 의사소통이 명확

* ##### 자식 컴포넌트의 상태값이 부모 컴포넌트로부터 분리되어 독립적으로 관리되기 때문에 재사용성과 유지보수성이 향상

- ##### 많은 통제권을 얻어 유저는 직접적으로 그 컴포넌트를 관리를 할 수 있다.

#### 단점은?

<img src="./img/design pattern x.png"/>

- ##### 사용하는 것이 복잡하며 JSX, useState, handleChange 세 곳 모두를 확인을 해야한다.

### Material-UI란 무엇일까?

    Material-UI이란 리액트 개발에서 쉽게 사용할 수 있는 UI 프레임워크이다

#### 설치 방법

```shell
// with npm
npm install @material-ui/core

// with yarn
yarn add @material-ui/core
```

```shell
//SVG Icons 사용 시

// with npm
npm install @material-ui/icons

// with yarn
yarn add @material-ui/icons
```

#### 사용 방법

- ##### 사용하고자 하는 항목을 import 한다

* ##### (응용) styles을 이용하여 각 component를 커스텀마이징 한다.

```js
import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button"; // Button을 import 한다.

function App() {
  return (
    <Button variant="contained" color="primary">
      {" "}
      // 사용한다. Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
```

### 마치며

<img src="./img/end photo.jpeg" width="800px"/>

    Control Props Pattern에 대해서 알아보았다. 처음에 사실 엄청 어려운 내용이라고 생각을 하였는데,
    아직도 조금 미숙한..? 부분이 있는 것 같지만 코드를 보고 분석하는 것이 뜻 깊었다. 하지만 공부할 자료의 내용이
    많이 부족한 것 같아서 아쉬운 면이 있는 것 같기도 하다. 내가 조사한 리액트 패턴 말고 다른 패턴도 조사해서
    내 TIL에 따로 올릴 예정이다.
