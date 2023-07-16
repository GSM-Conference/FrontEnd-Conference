## Redux

<img src="https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/07/redux-logo.png?w=1200&ssl=1"/>

### Redux(리덕스)란?

- ##### Redux(리덕스)란 JavaScript(자바스크립트) 상태관리 라이브러리이다.

* ##### Redux(리덕스)의 본질은 Node.js 모듈이다.

### Redux의 기본 개념 3가지!

- ##### 1. Single source of truth

  - 동일한 데이터는 항상 같은 곳에서 가지고 옴
  - 즉, 스토어라는 하나뿐인 데이터 공간이 있다는 의미

- ##### 2. State is read-only

  - 리액트에서는 setState 메소드를 활용해야만 상태 변경이 가능
  - 리덕스에서도 액션이라는 객체를 통해서만 상태를 변경 가능

- ##### 3. Changes are made with pure functions

  - 변경은 순수함수로만 가능
  - 리듀서와 연관되는 개념임
  - Store(스토어) – Action(액션) – Reducer(리듀서)

### Store, Action, Reducer의 의미와 특징

<img src="https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/07/%E1%84%85%E1%85%B5%E1%84%83%E1%85%A5%E1%86%A8%E1%84%89%E1%85%B3-%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5-%E1%84%83%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A8.png?w=919&ssl=1"/>

### Store

#### Store(스토어)는 상태가 관리되는 오직 하나의 공간이다.

- ##### 컴포넌트와는 별개로 스토어라는 공간이 있어서 그 스토어 안에 앱에서 필요한 상태를 담는다.
- ##### 컴포넌트에서 상태 정보가 필요할 때 스토어에 접근한다.

      스토어는 현재의 앱 상태(state), Reducer, 추가적인 내장 함수들(dispatch, subscribe)등이 있다.

  ```js
  import { createStore } from "redux";
  import rootReducer from "../reducers/index";

  const store = createStore(rootReducer);
  ```

  - ##### 이처럼 store를 생성하고 reducer를 연결하여 어플리케이션을 연결하게 된다.

#### useSelector란?

```js
const items = useSelector((store) => store.cartReducer);
```

- ##### useSelector를 통해서 store의 특정 state를 가져올 수 있다.

### Action

#### Action(액션)은 앱에서 스토어에 운반할 데이터를 말하고, 자바스크립트 객체 형식이다.

```js

//JavaScript Object
  type: 'ACTION_CHANGE_USER', // 필수
  payload: { // 옵션
    name: '하나몬',
    age: 100
  }
}
```

    action 객체는 type을 필수로 가지고 있고, action의 type은 일바전으로 문자열 상수로 정의가 된다.

```js
const ADD_TODO = "ADD_TODO"; // action의 type을 정의
//정의된 action type은 action creators(액션 생성자 함수)를 통해 사용된다.
const ADD_TODO = "ADD_TODO";

const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};
```

- #### 액션 생성자 함수(Action Creator)

        액션 생성함수를 만들어서 사용하는 이유는 나중에 컴포넌트에서 더욱 쉽게 액션을 발생시키기 위해서
        그리하여 보통 함수 앞에 export 키워드를 붙여서 다른 파일에서 불러와서 사용한다.

  ```js
  export const addTodo = (text) => {
    return {
      type: ADD_TODO,
      text,
    };
  };
  ```

### Reducer

- ##### `Action(액션)` 객체가 dispatch() 메소드에 전달된다.
- ##### `dispatch(액션)`를 통해 Reducer를 호출한다.
- ##### `Reducer`는 새로운 Store 를 생성한다.

        1. Reducer는 state와 action 객체를 파라미터로 받아온다.

        2. state가 객체나 배열일 경우 스프레드 연산자를 사용하거나 concat 메소드를 사용하는 식으로
        원래의 배열이나 객체(state)를 수정하지 않아야 한다는 점에 주의해야한다.

        Reducer 함수에서는 action의 type에 따라 변화된 state를 반환하게 된다.

  ```js
  const itemReducer = (state = initialState, action) {
  switch (action.type) {
      case ADD_TO_CART:
      return Object.assign({}, state, {cartItems: [...state.cartItems, action.payload]});
      case REMOVE_FROM_CART:
      const filtered = state.cartItems.filter(el => el.itemId !== action.payload.itemId);
      return { ...state, cartItems: filtered };
      default:
      return state;
  }
  };
  ```

### Redux의 상태 관리 도식화

#### 이유는 데이터가 한 방향으로만 흘러야하기 때문이다.

<img src="https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/07/%E1%84%85%E1%85%B5%E1%84%83%E1%85%A5%E1%86%A8%E1%84%89%E1%85%B3-%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5-%E1%84%83%E1%85%A9%E1%84%89%E1%85%B5%E1%86%A8%E1%84%92%E1%85%AA.png?w=944&ssl=1"/>

### Redux에서 위 개념을 구현하는 두 가지 방법

- #### 1. mapStateToProps()
- #### 2. Redux hooks

### Redux의 장점

- #### 1. 상태를 예측 가능하게 만듦
- #### 2. 유지보수
- #### 3. 디버깅에 유리
- #### 4. 테스트를 붙이기 용의

### Basic Redux usage

### dispatch

     스토어의 메서드이고 상태값 업데이트를 실행하는 함수입니다. 디스패치가 실행되면 파라미터로 전달받은
     액션값이 리듀서의 두번째 파라미터 객체로 전달됩니다. 그러면 리듀서 안에있는 코드들로 인하여 스토어에
     상태값이 저장됩니다.

### subscribe

    스토어의 데이터가 변할때마다 실행되는 메서드입니다.

- #### 1. 리덕스로 상태 관리하는 방법
        (npm init 후 npm install redux 한 상태에서 연습한다.)

<img src="https://cdn.discordapp.com/attachments/956190154454876183/1125322963487567882/image.png"/>

```js
// redux 만 설치된 프로젝트의 index.js 파일
// 리덕스 모듈 가져오기
const { createStore } = require("redux");
// data 기본
const nameData = { name: "Hanamon" };
// action 객체
const actionChangeName = (newname) => {
  return {
    type: "ACTION_CHANGE_NAME",
    payload: newname,
  };
};
// reducer 함수
const postReducer = (state = nameData, action) => {
  switch (action.type) {
    case "ACTION_CHANGE_NAME":
      return Object.assign({}, state, { ...state, name: action.payload });
      break;
    default:
      return state;
  }
};
// store 생성 및 리듀서 등록
const store = createStore(postReducer);
// 수정 전 확인
console.log(store.getState());
// 수정 실행 (이 부분에서 예를들어 클릭 시 실행되게 끔 만들면 된다.)
store.dispatch(actionChangeName("하나몬"));
// 수정 후 확인
console.log(store.getState());
```

### 리덕스의 사용 이유

<img src="https://velog.velcdn.com/images%2F404%2Fpost%2F749795c8-e0ae-46e1-a904-9fe8136c2457%2Fredux.jpg"/>

    리덕스를 사용하면 데이터 중앙집권화 덕분에 편리하게 데이터를 어느 컴포넌트에서 쉽게 쓸 수 있다.
    일반적인 웹앱에서는 저런 컴포넌트 구성을 사용하지 않고 주로 리액트에서 볼 수 있는 컴포넌트 구성이고,
    사람들이 리액트를 사용할때 리덕스를 함께쓰고 리액트와 함깨 발전되는 리덕스를 볼 수 있다.

- ##### state Drilling - 상위 컴포넌트의 state 를 하위 컴포넌트로 계속해서 전달해 <br/> 목표 컴포넌트까지 props 를 통해 전달하는 행위

<img src="https://velog.velcdn.com/images%2Fseungsang00%2Fpost%2Fb721c593-0365-4a3e-9a02-8f6886805222%2Fimage.png"/>

    이러한 props 를 통한 state 전달 방식은 로직상의 큰 문제는 없다. 하지만 코드의 가독성이 떨어지고
    해당 컴포넌트에서 사용하지 않는 (전달만을 위해 존재하는) props 들이 많이 생기면서 비효율적인
    데이터 흐름이 발생하게 되고, 상위 컴포넌트에서 props의 이름을 변경할 경우 해당 props가 거쳐간
    모든 컴포넌트에서 props 이름을 수정해주어야 하기 때문에 코드 관리 측면에서도 좋지 않다.

    Redux를 사용하면 ➡️ 하나의 store를 통해서 모든 state와 상태 관리 로직을 저장, 유지하며
    자기 자신이 원하는 컴포넌트로만 데이터값을 전달할 수 있다.

### 추가적인 dispatch subscribe

```js
import { createStore } from 'redux'

//액션이 어떻게 상태를 다음 상태로 변경하는지 서술하는 함수인 리듀서
function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

//상태가 저장되는 공간인 스토어
let store = createStore(reducer)

//상태 변화를 감지하는 서브스크라이브
store.subscribe(() => console.log(store.getState())))

//내부 상태를 변경하는 유일한 방법인 액션과 그 액션을 리듀서로 보내줄 디스패치
store.dispatch({ type: 'INCREMENT' })// 1
store.dispatch({ type: 'DECREMENT' })// 0
```

## 느낀점

<img src="https://cdn-icons-png.flaticon.com/512/5724/5724215.png" style="width:230px"/>

<br/>
<br/>

    지금 프로젝트에서는 Redux를 적용하면서 하고 있지는 않지만 내 동아리와 팀인 msg는 Redux라는
    라이브러리를 필수로 사용하고 있는 것 같다. 여러가지 사이트를 유지보수?를 하기 위해서는 반드시
    배워야 할 스킬과 스택이라고 생각하고 이번 계기를 통해서 이번 방학 때 새로운 기술을 배워보는 것도
    좋은 것 같다는 생각을 했다.
