## React-Query

<img src="https://images.velog.io/images/jo_love/post/bf54eee2-7229-47f9-a7b7-8f87216b433d/react-query.svg">

### react query란?

    리액트 쿼리는 서버에서 가져온 데이터를 웹 브라우저 앱에서 사용하기 쉽게 도와주는 기술이다.

    서버는 클라이언트에게 데이터베이스에 있는 정보를 전달해주는 역할을 하는데,
    여기서 서버는 api 서버, 클라이언트는 웹 브라우저에서 실행되는 우리가 작성한 리엑트 앱을 의미를 한다.

### server state

- ##### server / client state를 가지고 있는 어플리케이션의 아키텍쳐 구조

        서버는 특정 시점에 클라이언트의 요청에 대해 DB에서 유저 정보를 가져와 서버의 상태
        값을 만들어낸다. 또 DB에 있는 값을 그대로 클라이언트에게 전달 할 수도 있고,
        요청에 담긴 특정 값을 이용해 정보를 가공 해서 메모리에 들고 있다.
        그리고 이 정보를 클라이언트에게 전달한다.

### client state

- ##### client에서 자체적으로 만드는 state (최초 데이터의 발생지가 클라이언트)
- ##### server에서 전달받은 값으로 만다는 state (최초 데이터의 발생지가 서버)

        첫번째인 클라이언트가 자체적으로 만드는 state는 대개 UI를 담당하는 부분으로
        모달이 열리고 닫았는지, 어떤 버튼이 클릭되었는지, 지금 창이 리사이징 되고 있는지에
        대한 메타 정보를 담은 상태값을 나타낸다.

<img src="https://velog.velcdn.com/images/jay/post/0ab8d6f8-dc26-4ee0-904e-7ad876806841/image.png">

<br>
<br>

## react query가 해결 해주는 문제

### 간편한 server state 수급 방식

    앱이 간단하다면 useState와 contextAPI만 사용하더라도 대부분의 client state를 다룰 수 있다
    하지만 복잡도가 올라가고 성능 향상에 대한 필요성이 생기는 시점이 예상된다면, 이미 잘 만들어진 바퀴인
    상태 관리 도구를 선택하는게 가장 합리적인 선택이 될지도 모른다. -> react-query

##### 리액트를 처음 배우는 사람들에게 있어 작지 않은 진입 장벽이였다. <br>특히 saga의 generator 문법은 js에 익숙하지 않은 개발자들에게는 큰 부담감으로 다가왔습니다.

### generator문법이 무엇일까?

    이터레이터를 사용해서 자신의 실행을 제어하는 함수이다.

- #### 일반적인 함수
        매개변수를 받고 값을 반환하는데, 여기서 호출자는 매겨변수 외에, 함수의 실행을
        제어할 방법이 전혀 없다는 것이다.

* #### generator
        함수의 실행을 개별적 단계로 나눔으로 함수의 실행을 제어하다는 것이고,
        또 실행 중인 함수와 통신한다는 것이다.

#### react query는 hook 기반의 로직들로 되어있어 해당 훅을 사용하는 <br>컴포넌트에서 상태 값의 변경을 간편하게 파악하여 리렌더링을 유발하게 해줍니다.

[generator에 대해서 더 궁금하다면?](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=on21life&logNo=221610383003)

### 캐시

##### 초기 문제

    react query를 사용하기 전까지 state라는 용어는 암묵적으로 client의 state를 가르켰다.
    react query가 server state라는 개념을 만든 것이 아니라 client state만 신경쓰기에도
    프론트엔드 개발자가 해줘야할 작업들이 많았던 것인데요, 그리하여서 리액트 쿼리로 인하여
    캐시 처리를 간편하게 할 수 있는 interface를 제공하는 것이다.

- ##### 1. 몇 초 이후에는 데이터가 유효하지 않은 것으로 간주하고 데이터를 다시 불러온다.

- ##### 2. 데이터에 변경점이 있는 경우에만 리렌더링을 유발한다.

- ##### 3. 유저가 탭을 이동했다가 다시 돌아왔을 때 데이터를 다시 불러온다.

- ##### 4. 데이터를 다시 호출할때 응답이 오기 전까지는 이전 데이터를 계속 보여준다. <br>필요에 따라서는 로딩바와 같은 대안 UI를 보여주기 위해 loading state를 기본적으로 제공한다.

      클라이언트와 서버의 상태 값을 일치시켜줘야 하는 요구사항에서 부가적으로 생길 수 있는
      로직들을 리엑트 쿼리의 api와 인터페이스로 간단하게 해결할 수 있도록 도와주는 것입니다.

### react query 인기

<img src="https://velog.velcdn.com/images/jay/post/17e55a84-1b87-48fe-898a-f1c70b170019/image.png">

[10분 만에 알아보는 react-query](https://velog.io/@jay/10-minute-react-query-concept)

<img src="https://velog.velcdn.com/images%2Fjkl1545%2Fpost%2F89cf1f23-57f4-4772-a06d-71cdcbb54bde%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-01-27%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.25.48.png">

## react-query 상태

- ##### 1. fresh : 새롭게 추가된 쿼리 & 만료되지 않은 쿼리 ➜ 컴포넌트가 마운트, 업데이트되어도 데이터 재요청 안 한다.

- ##### 2. fetching : 요청 중인 쿼리이다.

- ##### 3. stale : 만료된 쿼리 ➜ 컴포넌트가 마운트, 업데이트되면 데이터 재요청을 한다.

- ##### 4. inactive : 비활성화된 쿼리 ➜ 특정 시간이 지나면 가비지 컬렉터에 의해 제거한다.

## react-query 사용방법

```
//설치 및 초기 설정

npm i react-query // npm 사용
or
yarn add react-query // yarn 사용
```

<br>

```js
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {return <QueryClientProvider client={queryClient}><QueryClientProvider/>}

export default App;
```

    캐시를 관리하기 위해 QueryClient 인스턴스를 생성한 후 QueryClientProvider를
    통해 컴포넌트가 QueryClient 인스턴스에 접근할 수 있도록 App컴포넌트 최상단에 추가한다.

## 기존 요청 방식 VS react-query 요청 방식

- ##### 기존 요청 방식 : isLoading과 data를 state로 가지며 서버 데이터를 불러온 후 상태 update이다.
- ##### react-query : useQuery훅을 이용해 반환받은 isLoading과 data 사용한다.

<img src="https://velog.velcdn.com/images%2Fjkl1545%2Fpost%2Fb72f7dcc-555f-4a46-9501-1fabd5e775f5%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-01-27%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.45.00.png">

[react-query](https://velog.io/@jkl1545/React-Query)
