## Custom **Hook Pattern**이란??

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FTYbVG%2FbtsnF6p80Bs%2FaIrZFWTiZVl0rOMVScuh20%2Fimg.png'>

Custom Hook Pattern은 React DesignPattern 중에 하나이다.

## **Design Pattern**

Design Pattern은 일반적으로 소프트웨어 디자인에서 발생하는 문제에 대한 솔루션이다. 코드 내에서 반복되는 디자인 문제를 해결하기 위해 만들어졌다.

React에서는 아래와 같은 사항을 고려할 수 있다.

- 여려가지 상황에 적용할 수 있도록 컴포넌트의 재사용성을 높일 수 있을까?
- UI나 기능의 측면에서 확장시켜 사용할 수 있는 컴포넌트를 제작할 수 있을까?
- 쉽고 편리하게 사용할 수 있는 컴포넌트를 제작할 수 있을까?

이러한 사항들을 고려하여 보다 개선된 코드를 짤 수 있다.

## **Custom Hook Pattern**

이\*우 씨는 프로젝트 마무리 단계에서 반응형 작업을 맡게 되었다. 디자인상 style 파일 내에서 단순 미디어 쿼리로 반응형 작업이 불가능한 부분들이 다소 보였다. 이러한 부분들은 window의 width를 가져와 width에 따라 디자인과 같이 스타일이 변경되도록 지정할 수 있었다. window의 width를 가져오고 window의 width가 변경될 때마다 값이 업데이트되도록 로직을 작성하였다. 이와 같은 작업들이 필요한 컴포넌트들은 한두 가지가 아니었고 각 컴포넌트들의 중복된 코드로 인해 전체적인 코드가 깔끔하지 않게 되었다. 이\*우 씨는 이 문제를 어떻게 해결해야 할지 고민되었다.

Custom Hook Pattern으로 위와 같은 상황을 개선할 수 있다.

컴포넌트에서 주요 로직을 Hook으로 분리하여 관리하는 Custom Hook Pattern은 주요 로직을 재사용 가능하도록 함으로써 보다 개선된 코드를 작성할 수 있다.

위에 예시에서는 **window의 width를 가져오고 window의 width가 변경될 때마다 값이 업데이트되도록 하는 로직을** Custom Hook으로 분리하여 width값을 반환하게 할 수 있을 것이다. 그럼 각 컴포넌트에서는 width값만 받아 편리하게 사용할 수 있다.

**메인 로직을 Custom Hook으로 분리하여 재사용성과 컴포넌트 통제성을 높이는 것.** 그것이 Custom Hook Pattern이다.

다른 예시를 통해 Custom Hook Pattern을 좀 더 이해해 보자.

#### Custom Hook을 통한 API 요청

Custom Hook은 API 통신을 할 때에도 자주 사용된다. API 요청을 하는 로직을 Custom Hook으로 분리해 사용한다.

아래는 게시물을 삭제하는 요청을 하는 로직을 Custom Hook으로 분리해 사용하는 예시다.

```ts
// useDeletePost

import { useMutation } from "@tanstack/react-query";

import { del, postQueryKeys, postUrl } from "api/admin";

export const useDeletePost = () =>
  useMutation(postQueryKeys.deletePost(), (seq: number) =>
    del(postUrl.deletePost(seq))
  );
```

react-query에서 제공하는 useMutation Hook을 사용하여 useDeletePost라는 Custom Hook을 만들었다. 게시글의 sequence를 전달받아 해당하는 게시글을 삭제한다.

아래는 분리된 useDeletePost를 사용하여 게시글을 삭제하는 예시다.

```ts
// ExampleComponent
import { useDeletePost } from 'api/admin';

.
.
.

const ExampleComponent = ({ postSeq }: { postSeq: number }) => {

  const { mutate: deletePost, isSuccess, isError } = useDeletePost();

  if (isSuccess) {
    alert('게시물 삭제가 완료되었어요.');
    replace(`/${categorys[category]}`);
  }

  return (

    .
    .
    .

    <DeleteModal onClick={() => deletePost(postSeq)} />
  )
}
```

DeleteModal이 onClick 되면 deletePost에 postSeq를 전달한다. 게시글 삭제에 성공하면 삭제된 게시글의 카테고리 리스트로 redirect 된다.

이러한 방식을 통해 쉽고 편리하게 게시글을 삭제하는 로직을 작성할 수 있게 되었다.

### Custom Hook과 일반 Util 함수는 뭐가 다를까?

예전에 Custom Hook에 대해 공부하면서 이러한 생각을 한 적이 있다.

> 일반 Util 함수와 Custom Hook은 뭐가 다를까?

둘은 큰 차이가 있지 않다.

Custom Hook과 Util 함수 모두 중복되는 로직들을 개선할 수 있다는 공통점이 있다.

둘의 차이점은 아래와 같다.

Custom Hook

- React의 기본 Hook들을 사용하여 구현한다.
- 구성 요소에 특정 기능이나 동작을 제공한다.

Util 함수

- 어플리케이션의 여러 부분에서 특정 작업을 수행할 수 있는 독립 실행형 함수이다.

이 외에도 Custom Hook은 아래의 규칙을 따른다.

### Custom Hook의 규칙

- "use"라는 접두어가 붙는다.
- 오직 최상위 레벨에서만 호출해야 한다 : 조건문이나 중첩 함수, 반복문 등에서는 호출할 수 없다.
- React 함수 내에서만 호출해야 한다 : 일반적인 JS 함수 내에서는 호출해선 안된다.

[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

라는 플러그인으로 위의 규칙들을 강제할 수 있다.

## 마치며

평소 Custom Hook을 제작하여 사용하고는 있었지만 이것이 디자인 패턴 중 하나라는 사실은 인지하지 못하였다. Design Pattern이 무엇인지와 Custom Hook Pattern이라는 디자인 패턴을 알게 되었고 앞으로 다른 디자인 패턴도 공부해가고 싶다. 디자인 패턴을 배우고 적용하여 프로젝트를 한다면 많이 발전할 수 있을 것 같다.

## References

[Hook의 규칙 – React

A JavaScript library for building user interfaces

ko.legacy.reactjs.org](https://ko.legacy.reactjs.org/docs/hooks-rules.html)

[What's a design pattern?

What's a design pattern? Design patterns are typical solutions to commonly occurring problems in software design. They are like pre-made blueprints that you can customize to solve a recurring design problem in your code. You can’t just find a pattern and

refactoring.guru](https://refactoring.guru/design-patterns/what-is-pattern)
