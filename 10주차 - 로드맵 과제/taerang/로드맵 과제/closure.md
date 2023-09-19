# closure 그게 뭘까❓

#### 클로저는 함수와 함수가 선언된 어휘적 환경의 조합이라고 불린다.

    클로저는 js의 교유 개념이 아니다. 함수를 일급 객체로 취급하는 함수형 프로그래밍 언어(얼랭, 스칼라, 하스켈, 리스프)에서 사용하는 특성

- 여기서의 함수는 반환된 내부함수를 의미를 하고 있다.

### 클로저

#### 클로저는 자신이 생성될 때의 환경(Lexical environment)을 기억하는 함수라고 알고 있으면 좋다.

## 클로저가 필요한 이유

### 1. 전역변수를 줄일 수 있다.

전역변수는 예상치 못한 Side Effect를 일으킬 수 있기에 최대한 줄이는 것이 좋다.문에 최대한 전역변수를 줄여서 코딩을 해야한다.
하지만 프로그램 구현 시 함수 하나에 사용하는 전역변수가 필요한 순간이 있다. 이럴 때 클로저가 유용하게 사용된다.

```js
// Counter 예제
const btn = document.querySelector("button");
btn.addEventListener("click", handleClick);

let count = 0;
function handleCilck() {
  count++;
  return count;
}

//위와 같은 경우에 count를 전역변수로 사용해줘야 count가 증가를 해줄 수 있음
//이럴경우 클로져를 사용해서 해결할 수 있다.

// Counter Closure 예제
const btn = document.querySelector("button");
btn.addEventListener("click", handleClick());

function handleCilck() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
// 위와 같이 작성해 준다면 외부함수(handleClick)의 lexical environment를 참조하는 함수를
// btn의 콜백함수로 이용해 전역객체 없이 구현할 수 있다.
```

#### 위와 같이 확실히 바로 무슨 느낌인지 아실 것 같나요?

### 2. 비슷한 형태의 코드를 재사용률을 높일 수 있다.

```js
// 새로운 태그를 만들 수 있는 함수 Closure 구현
const order = (food) => {
  console.log(food + "을(를) 주문하셨습니다.");
  return function (drink) {
    return drink + "을(를) 추가로 주문하셨습니다.";
  };
};

const orderBurger = order("햄버거");
const orderPizza = order("피자");
console.log(orderBurger("콜라"));
console.log(orderPizza("사이다"));

//인자에 open,close,content를 한번에 다 받는다면,This is my content! 와 같은 값을 출력을 하고 싶을 때 가독성이 떨어질 수 있다.
//하지만 클로져로 구현하면 코드의 가독성도 좋은 재사용하기 편한 코드를 구현할 수 있음.
```

### 마치며

    클로저 함수는 우리가 개발을 하는데 있어서 매우 중요한 역할을 한다고 생각을 한다. 분명히 처음 접하는 코드 작성이며 다소 어렵게
    느껴질 수도 있는 느낌이지만, 코드의 효율성을 확실히 더 좋게 잡아주는 도구라고 생각하고 여러 방면에서 사용하는 것이 좋아보인다.
