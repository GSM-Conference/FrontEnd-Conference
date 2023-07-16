## FE 보안

### XSS(Cross-site scripting)

     XSS는 공격자가 악의적인 스크립트를 주입하여, 해당 화면을 보는
     사용자들에게 비정상적인 기능을 수행하게 하는 것

#### 왜 발생하는 것일까❓

```html
<script class="xss">
  const cookie = document.cookie; // cookie 요청 api 호출 // cookie 전송!
</script>
```

    이런 위와 같은 코드로 작성을 할 경우에는 다른 외부 사용자가 볼 상황에 해당 스크립트가 실행이 되어
    나도 모르는 사이에 쿠키의 정보가 외부로 유출이 되거나, 탈취자가 나의 정보를 가져가 사용할 수 있다.

    html에서 < 기호는,tag의 open 역할을 하고, 적절한 태그를 사용함으로, element로서 역할을
    하게 된다.

#### 예시

```html
<div>I'm taerang!! ><</div>
```

`I'm taerang!!`이라는 문장이 `div` 태그 내에 있을 때, html 파싱 에러가 발생을 한다.
태그를 열고 닫는 기호가 존재하고, 잘못 파싱이 되고 있기 때문에 에러가 발생하는 것이다.

### 예방 방법❓

    악의적인 스크립트 예방을 방지하기 위해서는, 개발자의 의도하거나 개발자
    부분 외적인 부분은 의도하지 않은 동작이 수행이 되지 않도록 하면 된다.

#### 1. escape

escape의 방법은 FE에서만 동작에 영향을 미칠 수 있는 문자열들을 다른 문자로 대체하여, 스크립트가
실행이 되지 않도록 하는 것이다. `<` 기호는 `&lt;`, `>`는 `&gt;`로 변환하여 표현으르 하면, 화면에는
정삭적으로 표현이 되는 것을 볼 수 있다.

```html
<!-- in the code -->
<body>
  <h1>&lt;&gt;</h1>
</body>
```

#### 유저가 클라이언트를 보는 관점

<img src="https://user-images.githubusercontent.com/56826914/203702452-1aed8363-3a36-4495-8ca5-71c07c409e68.png" width="300px" height="300px">

#### 다양한 특수 기호들로 XSS 공격 예방하기

```html
< = &lt; > = &gt; 공백 = &nbsp; & = &amp; " = &quot; ...
```

이러한 처리는 사용자의 글을 서버에서 문자열을 치환하여 저장하거나, 아니면 FE에서
문자열을 치환하여 사용자에게 보여주는 방식으로 산다.

### 리액트에서는❓

    React에서는 이러한 XSS공격에 대해서 매우 자유롭다.
    먼저, React는 JSX 문법을 사용하여 컴포넌트를 작성한다. 작성하게 되면 다음과 같은 예시이다.

#### 예시

```js
const Component = () => {
  return <div className="component">JSX Element</div>; // JSX
};
```

이런식으로 겉으로는 html과 동일한 모양을 가지고 있지만, babel등 트랜스파일러를 통해서 다음과 같은
모양으로 트랜스파일이 되고, 브라우저가 읽는다.

```js
React.CreateElement(Component, { className: "component" }, "JSX Element");
```

#### 그럼 트랜스파일러가 도대체 뭔데❓

- ##### 한 언어로 작성된 소스 코드를 비슷한 수준의 추상화를 가진 다른언어로 변환하는 것을 이야기한다.

* ##### 컴파일은 한 언어로 작성된 코드를 다른 언어로 변환하는 것인데, 트랜스파일러와 컴파일은 다르다.

```
ex. Compiler
Java -> bytecode
c -> assembly
ex. Transpiler
es6 코드 -> es5 코드로 변환하는 경우
c++ -> c
```

<br/>

### ReactDOM은 jsx에 삽입된 모든 값을 렌더링하기 전에 escape 된다.

    스크립트 형식의 데이터가 들어오더라도, 자동으로 escape 처리가 되어서 스크립트의 역할을 수행할 수 없다.
    앱, 웹에서 명시적으로 작성하지 않은 부분은 스크립트로 실행이 되지 않기 때문에 React를 사용함에
    있어서 걱정을 크게 할 필요는 없다는 것이다.

    다만 dangerouslySetInnerHTML 프로퍼티를 이용하여 html을 주입할 수는 있다.

### dangerouslySetInnerHTML 이건 뭘까❓

`dangerouslySetInnerHTML`은 브라우저 DOM에서 `innerHTML`을 사용하기 위한 React의 대체 방법이다.
일반적으로 코드에서 HTML을 설정하는 것은 사이트 간 스크립팅 공격에 쉽게 노출이 되어 매우 위험하다.
그리하여 React에서 직접 HTMl을 설정하고 수정할 수는 있지만, 위험하는 것을 상기시키기 위하여
`dangerouslySetInnerHTML`을 작성한다. `__html` 키로 전달을 해야한다.

#### 예시

```js
// HTML 콘텐츠를 반환하는 함수를 생성합니다.
function createMarkup() {
  return { __html: 'First &middot; Second' };
}

// 컴포넌트를 정의합니다.
function MyComponent() {
  // `dangerouslySetInnerHTML` 속성에 `createMarkup()` 함수의 반환 값을 전달합니다.
  // 이때 `__html` 키를 사용하여 HTML 콘텐츠를 전달합니다.
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}

// MyComponent 컴포넌트를 사용합니다.
// 결과적으로 <div>First · Second</div>가 렌더링됩니다.

}
```

### 마치며

<img src="./img/XSS.jpeg" width="60%"/>

    22년도에 사이버보안이라는 기능 동아리를 하면서 SQL Injection 또는 XSS 공격법, 다양한 보안에 대해서
    공부를 했던 기억이 있는데, 프론트엔드라는 전공을 옮기면서 XSS 특히 html과 보안법에 관련있는 자료들을
    공부를 하면서 앞으로 내가 개발을 하면서 보안에 대해서 조금 더 알아볼 필요도 있다고 생각했고, 시간이 나면
    더 다양하나 프론트에 보안성을 유지하면서 개발을 해야겠다. 내 개인적인 생각으로도 프론트엔드 개발자는 백엔드
    개발자 처럼 서버에 데이터 값을 막 저장하고 사용하는 것이 아닌 클라이언트 자체에서 보여주는 것이기 때문에
    보안성이 백엔드에 비해서 더 취약하다고 생각을 하고 있다. 그래서 앞으로 더 신중히 코드를 사용하여 효율적인
    프로젝트를 할 것이다. 이번 프론트 보안 관련이 뜻 깊이 남을 것 같다.
