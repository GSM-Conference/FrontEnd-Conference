# Test Code에 대해 알아보기

# 소프트웨어 테스트란?

테스트란 무언가 동작하는지 확인하는 행위입니다. 소프트웨어 테스트란 소프트웨어가 의도한대로 동작하는지를 테스트하는 행위를 의미합니다.

옛날에는 개발팀과 따로 테스트팀이 별도로 존재하였으며, 개발자는 테스트 과정에서 큰 관여를 하지 않았습니다. 하지만 최근에는 개발자가 자동화된 소프트웨어 테스트를 직접 구현하고 실행하는 것이 포편화되고 있습니다.

자동화된 소프트웨어란 사람이 직접 테스트하는 것이 아닌 컴퓨터를 통해 소프트웨어를 테스트하는 것을 의미합니다. 소프트웨어를 통해 테스트를 할 경우 다음과 같은 이점을 얻을 수 있습니다.

1. 컴퓨터를 통해서 실행하기에 사람이 실행하는 것보다 **빠르다.**
2. 정해진 스크립트에 따라 일관성있게 동작하기에 사람이 테스트 할 경우 발생할 수 있는 **휴먼에러를 기피할 수 있다.**
3. 피드백을 빠른 주기로 개발 중에 받을 수 있다.
4. 소프트웨어가 최소한 작성한 테스트 코드 안에서는 제대로 동작한다는 확신을 가질 수 있다.

## 종류

### 1. Unit Test

유닛 테스트는 테스트 중에서 가장 낮은 레벨이며, 가장 작은 범위를 테스트합니다.

유닛 테스트는 개별 함수, 메서드, 클래스, 컴포넌트 등의 동작을 테스트합니다. 유닛 테스트는 제일 간단한 형태의 테스트로 실행하는데 가장 적은 비용이 듭니다. 따라서 유닛 테스트는 개발 과정에서 가장 빈번하게 수행할 수 있는 테스트입니다.

### 2. Integration Test

통합 테스트는 두개 이상의 모듈이 결합해서 동작을 잘 수행하는지에 대한 테스트입니다.

예를들어 컴포넌트 안에서 렌더링이 정상적으로 되는지만을 테스트한다면 이는 개별 컴포넌트에 대한 유닛 테스트이지만, 이 컴포넌트가 Redux등의 상태관리 라이브러리와 통합했을 때 두 모듈이 잘 어우러져서 최종적으로 의도한 결과를 도출하는지 테스트하는 것은 통합 테스트라고 할 수 있습니다.

통합 테스트는 여러 모듈들을 통합하는 과정이 필요하기에 유닛 테스트보다는 많은 비용이 드는 테스트라고 할 수 있습니다.

### 3. End to End Test (E2E Test)

E2E 테스트는 실제 유저가 애플리케이션을 사용하는 것과 유사한 환경을 구축한 후 실제 유저의 동작을 흉내내서 테스트하는 것입니다. 이는 실제 유저의 동작 흐름을 그대로 모방해서 테스트할 수 있다는 장점이 있지만 환경을 구축해야 하며, 유저의 행동 시나리오를 구축해야 하기에 굉장히 비싼 테스트입니다.

따라서 실제 개발 환경에서 유닛테스트와 통합테스트처럼 소스코드에 변화가 있을때마다 빈번하게 수행할 수는 없으며, 대부분 핵심 기능에 대해서 E2E 테스트를 구축 한 후 확인이 필요한 순간에만 실행하는 것이 일반적입니다. 프론트엔드에서의 E2E 테스트는 실제 브라우저와 유사한 환경을 구축 한 후, 거기서 실제로 여러가지 이벤트를 발생시킨 후 일련의 과정을 테스트하는 방식으로 진행됩니다.

# Jest를 활용한 프론트엔드 테스트

프론트엔드는 대부분 Jest, Mocha, chai 등의 테스트 라이브러리들이 대표적으로 사용되고 있습니다. 이중에서 Jest가 가장 압도적인 점유율을 가지고 있으며 CRA에서도 기본적으로 Jest를 포함해서 환경을 구성해주는 등 사실상 표준으로 사용되고 있습니다.

## Jest 사용법

Jetst는 기본적으로 `*.test.*`의 형태를 가진 파일을 테스트 파일로 인식하며, 해당 파일안에 있는 코드를 실행합니다.

Jest에서 테스트 코드를 작성하여 이를 기대한 상황과 일치하는지 판단하는 함수들을 **matchers** 라고 합니다. 따라서 Jest의 코드는 아래와 같은 형태를 띄게 됩니다.

1. 특정한 동작을 수행한다.
2. matcher를 통해 실제 결과와 기대값이 맞는지 검증한다.
3. 이때 하나의 특정한 동작을 수행하기 위해 `test()` 또는 `it()` 함수를 활용할 수 있습니다.

```tsx
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

it("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});
```

```tsx
test("테스트 이름 => 어떤 동작을 수행하는 테스트인지 설명", callback)

expect(실제 결과 값).matcher()
// 위의 예제에서 matcher는 toBe()
```

하나의 콜백안에서 여러 expect를 수행할 수 있으며 그 중 하나라도 기대값과 일치하지 않을 경우, 해당 테스트는 실패한 것으로 간주됩니다.

```tsx
const sum = (x, y) => x + y;

test("sum", () => {
  expect(sum(2, 2)).toBe(4); // 통과
  expect(sum(3, 1)).toBe(5); // 실패, sum test 실패
});
```

Jest에서 주로 사용되는 matcher들은 아래와 같습니다.

1. `toBe()`: expect인자가 toBe의 인자와 일치하는지를 검사합니다.
2. `toEqual()`:

   Object의 경우 참조값이 다르기에, toBe를 활용할 경우 각 객체의 내용이 같더라도, 일치하지 않다고 판단합니다. 따라서 객체를 상호 비교할 때는 `toEqual` matcher를 활용해야 합니다. `toEqual` 은 객체의 각 요소들을 재귀적으로 검사하면서 두 객체가 동일한지 판단해줍니다.

   ```tsx
   const obj = { hello: "world" };

   test("object eqaul", () => {
     expect(obj).toBe({ hello: "world" }); // X
     expect(obj).toEqual({ hello: "world" }); // O
   });
   ```

3. `toBeNull, toBeUndefined`
4. `toBeGreaterThan, toBeGraterThanOrEqaul, toBeLessThan, toBeLessThanOrEqaul` : 숫자값을 검증할 때 유용하게 사용할 수 있는 matcher입니다.
5. `toContain` : Iterable한 객체들이 특정한 요소를 포함하고 있는지 검증할 때 사용할 수 있습니다.

   ```jsx
   const iterable = [1, 2, 3, 4, 5];

   test("iterable contain 3", () => {
     expect(obj).toContain(3);
   });
   ```

6. `not` : matcher의 기대값을 반대로 변경해줍니다.

# React Test Library

Jest를 통해서 테스트 코드를 작성하는 것은 자바스크립트로 프로젝트를 개발하는 것과 같습니다. 그렇기에 리액트를 Jest로만 테스트하기에는 다소 어려움이 있습니다. 그래서 저희는 리액트 라이브러리를 사용하는 것과 같이 테스트도 React Test Library를 통해 Jest보다 쉽게 작성할 수 있습니다.

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("App rendering", () => {
  render(<App />);

  const header = screen.getByText("Hello World");
  const button = screen.getByText("Click me!");

  userEvent.click(button);
});
```

```tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Pagenation } from "components";
import mockData from "../../public/data/mock_data.json";

test("페이지네이션 테스트", async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pagenation orderList={mockData} />} />
      </Routes>
    </BrowserRouter>
  );
  const buttons = screen.getByTestId("pagenation-buttons");
  expect(buttons.childElementCount).toBe(10);
});
```

# TDD란?

TDD란 Test-Driven-Development의 약자로서 소프트웨어를 개발하는 여러 방법론 중 하나입니다.

TDD의 핵심은 일반적인 개발 흐름을 뒤집는 것입니다. 일반적인 개발 흐름은 코드 작성 → 테스트 코드 작성의 흐름을 따르지만, TDD는 실제 코드를 작성하기도 전에 테스트 코드부터 작성을 시작합니다.

TDD는 크게 RGB 3가지 단계를 거칩니다.

1. Red: 실제 구현을 하기 전에, 먼저 실패하는 테스트 코드를 작성한다. 그 후 테스트를 실행한다. 실제 코드가 작성되지 않았기에 테스트 코드는 당연히 실패한다.
2. Green: 테스트를 통과하기 위해 가장 간단한 형태로 코드를 작성한다. 그 후 테스트를 실행한다. 테스트는 실제 구현이 되었기에 통과한다.
3. Blue: Green 단계의 코드를 더 좋은 형태로 리팩터링한다. 이 과정에서 지속적으로 테스트를 실행해서 테스트가 통과하는지 확인한다.

이러한 방식으로 개발하면 다음과 같은 이점을 얻을 수 있습니다.

1. 코드 작성 과정에서 확신 및 자신감을 얻을 수 있다.
2. 구현을 잘못한 경우 바로 확인할 수 있다.
3. **코드의 동작이 명확해진다.**
   - 어떻게 코드를 짜야할 지가 아닌 무슨 코드를 짜야할지부터 고민하게 된다.
   - 테스트 코드를 작성하기 위해서는 이 코드가 어떤식으로 동작해야하는지를 먼저 생각해야합니다.
   - **내가 무엇을 만들어야 할지는 알지만, 어떻게 만들어야 할 지 모르는 상황일 때 적용하기 좋습니다.**

# 마무리

### 느낀점

테스트 코드에 대해 조사한 후 테스트 코드의 이점에 대해 확 와닿았다. 하지만 jest 문법에 대한 진입장벽이 발목을 잡는 것 같다.. TDD로 프로젝트를 개발하고 싶지만 그 전에 테스트 코드를 작성하는 요령을 가지고, TDD를 적용하여 안정적인 소프트웨어를 개발해봐야겠다!

### References
