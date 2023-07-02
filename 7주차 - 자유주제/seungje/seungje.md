# [블로그](https://frorong.tistory.com/entry/Vue)

## **Vue**는 무엇인가??

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnE9Uc%2Fbtsl5iL2nBq%2FpzScEZH4kpZ5ggZCx1lmqK%2Fimg.png"/>

**Vue**는 웹프론트엔드 프레임워크이다. 컴포넌트 기반의 **SPA**를 쉽게 구현할 수 있다.

**HTML**의 특성, **CSS**의 특성, **JS**의 특성을 모두 살려서 편하게 만들었다.

Vue는 공식 홈페이지에서 **프레임워크**라 정의하고 있다. 때문에 기능적인 면에서 보다 수월한 구현이 가능하여 초보분들이 프로젝트를 하기에는 React보다 Vue를 사용하는 것이 유리하다고 한다.

### Vue의 장점!

- Vue는 코드의 정규화가 되어있다. 코드의 스타일을 통일시킬 필요가 덜하다. 무언가를 구현하는 방법이 한 가지이기 때문에 고민할 필요성이 줄어든다.
- HTML렌더링 속도가 React에 비해 빠르다고 한다. 큰 차이는 없다.
- 장기적으로 꾸준한 업데이트가 이루어진다.

naver의 vibe도 Vue로 개발되었고 kakao의 신규 서비스중 50%가 Vue로 개발된다고 한다. 이러한 장점들 때문에 큰 회사들도 프로젝트에 Vue를 채택하는 게 아닐까?

## Vue CLI

Vue CLI는 Vue 어플리케이션을 개발하기 위한 공식적인 명령줄 인터페이스 도구이다. Vue CLI를 통해 Vue 프로젝트를 관리하고 구성할 수 있다.

설치

```
npm instll -g @vue/cli
```

이후 아래 명령어를 입력하여 Vue 프로젝트를 생성할 수 있다.

```
vue create ${폴더명}
```

프로젝트 생성시 default 옵션과 TypeScript, UnitTest 등 다른 여러 옵션을 선택 가능하다.

? run serve 명령어로 실행이 가능하다

```
pnpm run serve
// or npm run serve
// or ...
```

\`localhost:8080\`에 접속하여 아래와 같은 화면이 보여진다면 프로젝트가 정상적으로 생성된 것이다.

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb6HDrN%2Fbtsl2oTsUYh%2FxuN6yuKaeD4IOOgOJoIjGk%2Fimg.png'/>

### Vue Router

React와 마친가지로 Vue도 하나의 페이지에서 라우팅을 이용하여 화면을 전환한다. **Vue Router**는 Vue에서 제공하는 공식 라우팅 모듈이다.

설치

```
npm install vue-router --save
```

components 폴더 안에 layout 폴더를 생성하여 layout을 작성했다. 이후 App.vue에서 layout을 지정하였다.

Vue는 기본적으로 **template**의 부분이 있고 **script**의 부분이 있다.

template에는 HTML 코드가 들어가고 script에는 js 코드가 들어간다.

부가적인 **style**을 작성하기 위해서는 style 태그를 추가하여 작성하면 된다.

아래와 같이 다른 컴포넌트를 import 하여 사용할 수 있다.

```js
<template>
  <div>
    <Header />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";

export default {
  name: "App",
  components: { Header },
};
</script>
```

라우팅을 하기 위해서는 라우터를 생성해주어야 한다.

먼저 라우팅 될 component들을 import 해주고 각 component에 맞는 **path**를 지정한다.

```js
import Vue from "vue";
import VueRouter from "vue-router";
import { Home, About } from "./views";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
  ],
});
```

**main.js**에서 아래와 같이 Vue에 router를 지정해 주면 라우팅이 된다.

```js
import { router } from "./router";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
```

이후에는 각 페이지마다 필요한 개발을 진행하면 된다.

## Data Handling

아래는 Vue에서 data를 handling한 예시이다.

```js
<template>
  <div>
    <h1>Welcome to {{ text }}!</h1>
    <input @change="handleData" type="text" v-model="inputValue" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Home",
      inputValue: "example",
    };
  },
  methods: {
    handleData() {
      console.log(this.inputValue);
      this.text = this.inputValue;
    },
  },
  name: "ViewHome",
};
</script>
```

Vue에서는 React와 다르게 변수를 태그 안에 사용할 때 중괄호를 두 개 사용한다.

value는 **v-model**로 지정한다. 이벤트는 **@event**로 지정한다. 변수에 접근하기 위해선 **this**를 사용해야 한다.

이것들은 **Two Way Binding**이 지원되기 때문에 가능하다. 정말 data를 컨트롤하기 쉬운 것 같다!

### Watch

watch는 Vue에서 개발을 할 때 알아야 할 중요한 개념 중 하나이다.

watch를 사용하여 특정 변수가 변경되었을 때에 코드를 실행시킬 수 있다.

```js
export default {
  watch: {
    inputValue() {
      console.log(this.inputValue);
    },
  },
};
```

이렇게 작성하면 inputValue가 변경되었을 때에 console로 출력된다. 이때 메소드의 이름은 변수의 이름과 같아야 한다.

마치 React의 useEffect와 비슷해 보인다. useEffect에서 의존성 배열에 있는 변수가 변경되면 코드가 실행되니까 말이다.

### 배열 mapping

Vue에서 배열 내부의 값들을 mapping 하기 위해서는 **v-for**을 사용한다.

아래와 같이 작성하여 실행하면 1 ~ 9 까지의 리스트가 만들어진다.

```js
<template>
  <div>
    <ul>
      <li :key="i" v-for="(v, i) in list">{{ v }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    };
  },
  name: "ViewHome",
};
</script>
```

### 조건부 렌더링

Vue에서 조건부 렌더링을 하려면 **v-if**를 사용한다.

```js
<template>
  <div>
    <p v-if="isRender">Rendered!</p>
    <button @click="changeRender">{{ isRender ? "hide" : "show" }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRender: true,
    };
  },
  methods: {
    changeRender() {
      this.isRender = !this.isRender;
    },
  },
  name: "ViewHome",
};
</script>
```

button을 클릭하면 changeRender가 실행되어 isRender를 반대로 바꾼다. isRender에 따라 button의 텍스트가 변경되고 p가 조건부 렌더링된다.

**v-show**라는 옵션도 존재하는데 v-if는 조건에 불만족할 시 렌더링조차 하지 않는다. v-show는 일단 렌더링을 하되, 조건에 불만족할시 화면에 element가 보이지 않는다.

element가 렌더링 되었다, 안되었다 하는 작업은 리소스를 많이 차지하기 때문에 자주 렌더링이 되어야 하는 조건이라면 v-show옵션을 사용하는 게 유리하다.

## Vue Life Cycle

Vue의 생명주기는 다음과 같은 단계로 구성된다.

#### 1\. 생성 단계

- beforeCreate : Vue 인스턴스가 생성되고 이벤트 초기화 전에 호출된다.
- created : 템플릿에 접근할 수 있지만 DOM은 아직 마운트 되지 않았다.

#### 2\. 마운트 단계

- beforeMount : Vue 인스턴스의 템플릿이 컴파일되고 가상 DOM이 생성되기 전에 호출된다.
- mounted : Vue 인스턴스의 템플릿이 가상 DOM으로 렌더링 된 후에 호출된다.

#### 3\. 갱신 단계

- beforeUpdate : 데이터 변경으로 인해 가상 DOM이 다시 렌더링 되기 전에 호출된다. <- 이 단계에서 데이터가 수정된다.
- updated : 가상 DOM이 다시 렌더링 되고 화면이 갱신된 후에 호출된다.

#### 4\. 소멸 단계

- beforeUnmount : Vue 인스턴스가 파괴되기 전에 호출된다. 컴포넌트가 DOM에서 제거되기 전에 필요한 작업 수행이 가능하다.
- unmounted : Vue 인스턴스가 파괴되고 컴포넌트가 DOM에서 제거된 후에 호출된다.

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcDLj2O%2Fbtsl1zgVHYL%2FXDQf1OxKKNtqqLcI1TSYx0%2Fimg.png"/>

위 생명주기에 따라 코드를 실행시킬 수도 있다.

아래와 같이 작성하면

```js
export default {
  beforeCreate() {
    alert("beforeCreate");
  },
};
```

Vue 인스턴스가 생성되고 event가 초기화되기 전에 alert가 실행 되는 것이다!

## 마치며

Vue에서 data를 관리하는 방법이 신기하게 다가왔다. Vue는 공식적으로 프레임워크라 정의된 만큼 편리하고 수월하게 작업이 가능하여 좋았다. 확실히 초보자들이 사용하기 쉬운 프레임워크인 것 같다. 개인 프로젝트를 진행할 때에 꼭 써보고 싶다..!

Vue를 연습하며 특히 버전 관련 오류가 많았다. 이번에는 Vue 2 버전으로 공부했는데 여유가 된다면 Vue3버전도 학습해보고 싶다!

## References

v2.ko.vuejs.org](https://v2.ko.vuejs.org/v2/guide/instance.html#%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4-%ED%9B%85)
