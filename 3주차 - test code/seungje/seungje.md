## 테스트 코드??

**우리가 코드를 작성할 때에 항상 완벽한 코드를 작성할 수는 없다.** 특정 컴포넌트에서 오류가 생길 수도 있고, 각 컴포넌트가 상호작용하는 과정에서 문제가 생길 수도 있다. **작성된 코드가 정상적으로 작동하는지 검증하기 위한 과정이 테스트이다.**

그럼 테스트는 어떻게 하는 걸까? 가장 기본적으로는 **직접 사용하면서 테스트하는 방법이 있다**. 버튼을 눌러보고 스크롤을 하는 등 여러 동작을 통해 작성된 코드가 잘 작동하는지 검증한다. 하지만 이런 방법은 굉장히 **귀찮고 반복적이**다. 테스트 코드를 작성하여 테스트를 자동화한다면 테스트 시스템이 자동으로 어플리케이션을 검증하게 된다.

## 테스트 코드 작성의 **장점**

협업에서 다른 사람이 작성한 코드를 내가 만지게되었을 때 코드를 정확히 파악하지 못하였다면 실수를 저지를 수 있다.

실수를 확인하지 못하고 어플리케이션이 배포된다면 큰 문제가 될 것이다. 이러한 상황에서 **테스트 코드가 준비되어 있다면 쉽고 빠른 테스트를 통해 어플리케이션의 문제를 보다 간편하게 파악할 수 있다.**

또한 테스트 코드는 기존의 코드가 가지고있던 기능들을 망가뜨리는 것을 방지한다. 코드를 리팩터링 할 때에도 테스트 코드를 통하여 리팩토링 후의 코드가 전과 같이 작동하는지 확인할 수 있다.

**테스트 코드를 작성하면 신속한 테스트를 통해 코드의 질을 향상할 수 있다.**

## 테스트의 종류

#### **E2E 테스트**

- 프로젝트가 브라우저 위에서 제대로 작동하는지 사용자 관점에서 테스트한다. 끝에서 끝까지 테스트하는 방법이다. 사용자가 어플리케이션을 직접 사용하는 것처럼 동작하도록 스크립트를 작성한다.

#### **통합 테스트**

- **기능 단위로 묶어서** 테스트하는 방법이다. 보통은 Unit 테스트가 끝난 모듈끼리 묶어서 확인한다. 어플리케이션에서 두 가지 이상의 요소가 서로 정상적으로 상호작용 하는지 확인한다. 컴포넌트들이 서로 올바른 영향을 끼치며 정상적으로 렌더링 되는지, DOM 이벤트가 일어났을 때 원하는 UI의 변화가 일어나는지 등을 체크한다.

#### **Unit 테스트**

- **최소 단위로** 기능이 잘 작동하는지 확인하는 방법이다. 각 컴포넌트가 정상적으로 렌더링 되는지 특정 함수가 잘 작동하는지 등을 확인한다. 작은 단위로 테스트하기 때문에 어떤 부분이 문제인지 빠르게 확인할 수 있지만 어플리케이션 전체의 올바른 플로우는 보장하기 어렵다.

## React에서의 Unit 테스트

React에서 Unit 테스트를 할 때에 자주 사용되는 프레임워크로는 Jest가 있다.

Jest는 JavaScript테스트 러너이며 훌륭한 반복 속도로 많은 코드 제어를 가진다. React 공식 문서에서도 Jest를 추천하고있다.

Jest는 설치 및 시작이 간편하다. DOM을 테스팅하기 위한 라이브러리로는 react-testing-library가 가장 유명하다 한다.

## **Jest**

## \-> **JavaScript** 테스트

#### install

```
npm install jest

yarn add jest
```

#### package.json 수정

```
"scripts": {
    "test": "jest"
  },
```

npm test를 입력하여 jest 커맨드를 실행한다.

#### 테스트 코드 작성

test.js 파일을 생성하고 내용을 추가한다.

Jest는 test.js로 끝나는 파일이나 \_test\_라는 이름의 디렉토리 안에 있는 파일들을 테스트 파일로 인식한다.

```
test("test", () => {
  expect("target").toBla("result");
});
```

Bla 부분에서 사용되는 함수를 Test Matcher라고 한다.

Matcher 함수가 불만족하는지 테스트할 때에는 앞에 not을 붙여준다.

```
test("test", () => {
  expect("target").not.toBla("result");
});
```

#### 자주 사용되는 **Matcher**

**toEqual** -> 각 요소들을 확인하여 검증한다. 테스트 코드를 작성할 때에 객체를 검증할 일이 많아 자주 사용된다.

**toBeTruthy** -> 검증 대상이 true로 간주되면 통과이다.

**toBeFalsy** -> 검증 대상이 false로 간주되면 통과이다.

**toHaveLength** -> 배열의 길이를 체크해 준다.

**toContain** -> 특정 원소가 배열에 포함되었는지 확인해 준다.

**toMatch** -> 정규식 기반의 테스트가 필요할 때에 사용한다.

Jest에서 ES6 문법을 사용하면 오류가 생기는데 해결하려면 babel 설정을 해줘야 한다.

TS 사용도 마찬가지이다.

## **react-testing-library**

## \-> **React 컴포넌트** 테스트

```
npm i @testing-library/react

yarn add @testing-library/react



@testing-library/jest-dom // jest dom
```

src 디렉토리에 setupTests.js를 생성하고 testing-library를 Import 한다.

```
import '@testing-library/jest-dom'
import "@testing-library/react/cleanup-after-each";
```

react-testing-library의 주요 API로는 컴포넌트를 렌더링 해주는 **render** 함수와 특정 이벤트를 발생시키는 **fireEvent** 객체, DOM에서 특정 영역을 선택하기 위한 다양한 **쿼리 함수**가 있다.

### 정적 컴포넌트 테스팅

```
import React from "react";
import { render } from "@testing-library/react";
import Component from "./Component";

describe("<Component />", () => {
  it("renders component", () => {
    const { getByText } = render(<Component path="/abc" />);
    const component = getByText("BlaBlaBla"); // 검색할 텍스트를 인자로 넘긴다
    expect(component).toBeInTheDocument();
  });
});
```

1\. 컴포넌트를 render함수의 인자로 넘긴다.

2\. 리턴 객체로부터 쿼리 함수를 받는다.

- **getByText** 함수는 텍스트를 인자로 받고 해당 텍스트를 담고 있는 엘리먼트를 리턴한다.

3\. **jest-dom**의 **matcher**함수를 이용하여 검증한다.

- **toBeInTheDocument** 함수는 해당 엘리먼트가 존재하는지 검사한다.

### 동적 컴포넌트 테스팅

내부 상태에 따라 UI 변화가 생길 수 있는 복잡한 컴포넌트에 대한 테스팅이다.

동적 컴포넌트 테스팅을 할 때에는 **fireEvent**를 사용하여 진행한다.

## 마치며

다양한 matcher 함수, 쿼리 함수, fireEvent 객체를 조합하여 테스트 코드를 구성하는 게 재미있는 것 같다.

테스트 코드를 작성하면 **코드의 신뢰성을 확보**하고 **유지 보수 용이성을 향상**하는 등 다양한 장점이 많으니 사용해보는 게 좋을 것 같다.

가벼운 규모의 로직에서는 테스트 코드를 작성하여 테스트하는 비용에 비해 얻을 수 있는 이익이 적을 수 있다. 이 경우 가장 기본적인 방법인 직접 코드를 실행하면서 테스트하는 것이 효과적일 것 같다는 생각이 든다.

~중요한 문서를 작성할 때에 네이버 맞춤법 검사기를 애용한다.~

더 찾아보니 **storybook**과 **jest**, **react-testing-library**를 사용하여 **Unit 테스트**를 하는 방법도 있었다.

이 방법은 **storybook**이 사용되어 컴포넌트의 재사용성과 일관성을 확인할 수 있으며 컴포넌트의 다양한 상태와 시나리오를 시각적으로 확인할 수 있다고 한다.

최근 프로젝트 때문에 **storybook**을 접하게 되었는데 정말 괜찮은 라이브러리인 것 같다.

## References

테스팅 개요 - React

[https://ko.legacy.reactjs.org/docs/testing.html](https://ko.legacy.reactjs.org/docs/testing.html "테스팅 개요 - React")
