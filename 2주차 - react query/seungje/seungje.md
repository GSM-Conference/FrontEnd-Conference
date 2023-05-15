# React Query!

## React Query란??

<image src='./reactQuery.svg'>

React Query는 어플리케이션에서 데이터를 가져오고 관리하기 위한 라이브러리이다.

기존의 Redux나 MobX는 상태 관리를 중심으로 하지만 React Query는 **데이터를 가져오고 관리하는 데**에 집중했다.

API요청을 보낼 때 필요한 부분인 **데이터 패칭**, **캐싱**, **동기화**를 쉽게 수행할 수 있도록 해주고 **client state**와 **server state**를 구분 해준다.

React Query에 대해 본격적으로 알아보기 전에 먼저 배경 지식들을 알아보았다!

### client state

**client state**는 client에서 자체적으로 만든 state나 server에서 받은 정보로 만든 state이다.

자주 사용하는 모달창이 열렸는지에 대한 여부, 화면의 가로 사이즈 등이 있다.

### server state

**server state**는 client에 전달하기 위해 만들어진 서버의 상태값이다.

DB에 있는 값을 그대로 전달하거나 가공해서 client에게 전달해준다.

### 데이터 패칭

**데이터 패칭**은 데이터를 업데이트하는 기술이다.

React에서의 데이터 패칭은 주로 Ajax 요청을 통해 서버로부터 데이터를 가져오거나 업데이트하는 것을 의미한다.

아래는 데이터 패칭을 수행하는 예시이다.

```js
const dataFetching = () => {
    const [data, setData] = useState('');

    const getData = () => {
      fetch('https://url')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
    }

    return (
    	<p>{data}</p>
        <button onClick={getData} />
    )
}
```

### 캐싱

React에서의 **캐싱**은 이전에 계산된 값을 저장하고 재사용하는 것을 의미한다.

캐싱을 사용하면 계산이나 렌더링 작업을 계속해서 수행하지 않아도 되기 때문에 성능이 향상될 수 있다.

React에서는 **React.memo()** 함수를 사용해서 캐싱의 한 종류인 메모제이션을 구현할 수 있다.

아래는 메모제이션을 구현하는 예시이다.

```js
const Caching = (props) => {
  const { data } = props;

  const updatingFunc = (data) => {...}

  const updateData = useMemo(() => {
    return updatingFunc(data);
  }, [data]);

  return (
    <div>
      {processedData}
    </div>
  );
}

export default React.memo(ExampleComponent);
```

### 동기화

React에서의 **동기화**는 컴포넌트의 상태와 뷰를 일치시키는 것을 의미한다.

컴포넌트의 상태가 변경되면 이를 바탕으로 뷰를 업데이트한다.

아래는 동기화가 이루어지는 과정이다.

#### 1\. 상태 업데이트

컴포넌트의 상태가 변경된다.

#### 2\. 렌더링

컴포넌트가 다시 렌더링되어 이에 따라 뷰가 업데이트 된다

#### 3\. DOM 업데이트

React는 렌더링 결과를 바탕으로 가상 DOM을 생성한다. 가상 DOM은 별도로 존재한다. 변경된 부분만 실제 DOM에 적용된다.

#### 4\. 레이아웃 및 페인팅

실제 DOM에 변경된 내용이 적용된다. 변경된 부분이 유저에게 보여진다.

## 왜 React Query인가?

React에서 제공하는 hook만으로도 비동기 처리 커스텀 훅을 만들 수 있지만

React에서 이 작업들을 수행하려면 많은 고려사항들을 가지고 가야한다.

맡아야하는 부담이 늘어나고 안정성이 떨어진다.

나는 Redux를 써보지 않았지만 Redux에서는 기본 원칙이 존재하고 그 원칙을 충족시키기 위해서는 복잡한 코드가 요구된다 한다.

하나의 API 요청을 처리하기 위해 여러 개의 action이 필요하다 한다.

비동기 action을 처리하기 위한 복잡성이 우려된다.

또한 Redux는 API 통신과 비동기 상태 관리를 위한 라이브러리가 아니기 때문에 관련 코드를 개발자가 구현해야 한다.

> 대부분의 상태 관리 라이브러리는 클라이언트 상태 작업에 적합하지만 비동기 또는 서버 상태 작업에는 적합하지 않습니다.

라고 React Query측은 말한다.

React Query는 보다 쉬운 방법으로 위의 작업들을 수행 가능하다.

API와 연결된 많은 전역 상태들을 관리하기 쉽고 API 호출 코드를 직관적이게 구현 가능하다.

### React Query 사용

#### 0\. 설치

```
pnpm install react-query
```

```
yarn add react-query
```

#### 1\. React Query Provider 설정하기

React Query를 사용하려면 루트 컴포넌트에 React Query Provider 설정을 해줘야 한다.

```js
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById("root")
);

reportWebVitals();
```

#### 2\. Query 생성하기

React Query에서 데이터를 가져오려면 Query를 생성해야 한다.

Query의 역할은 서버로부터 데이터를 가져오는것이다.

```js
import { useQuery } from "react-query";
import axios from "axios";

const getDatas = () => {
  return axios.get("api").then((res) => res.data);
};

const ExComponent = () => {
  const { data, isLoading } = useQuery("datas", getDatas);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <div>{datas.text}</div>;
};
```

useQuery의 첫 번째 인자로는 Query의 이름, 두 번째 인자로는 데이터를 가져오는 함수를 전달한다.

첫 번째 인자인 Query의 이름은 데이터를 구분하기 위한 고유한 key 값이어야 한다.

React Query는 요청에 대한 캐싱, 리트라이, 재시도, 갱신 등을 자동으로 처리 해준다.

정말 간결하고 깔끔해 보인다!!

#### 3\. 데이터 업데이트하기

React Query에서 데이터를 업데이트하려면 useMutation을 사용한다.

```js
import axios from "axios";
import { useMutation } from "react-query";

const postData = async (datas) => {
  const res = await axios.post("api", datas);
  return res.data;
};

const usePostDataMutation = () => {
  return useMutation((datas) => postData(datas));
};

export default usePostDataMutation;
```

useMutation의 인자로 비동기 함수를 전달해서 데이터를 변경할 수 있게 한다.

useMutation은 객체를 반환하는데 해당 객체의 mutate 함수를 통해서 데이터 업데이트를 수행한다.

```js
const postDataMutation = usePostDataMutation();

postDataMutation.mutate({ data1: "data1", data2: "data2" });
```

postDataMutation 함수를 실행하면 React Query가  postData 함수를 통해 서버에 데이터를 전달하고 상태를 업데이트한다.

이 때 필요한 리렌더링도 자동으로 처리된다.

매우 편하게 데이터를 업데이트 할 수 있어 당장이라도 프로젝트에 적용시키고싶다!!

## 마치며

React Query에 대해 조사하고 배우면서 이해하기 쉽지 않았지만 정말 편리하다고 느꼈다.

나에게 매력적으로 다가왔다.

이런 편리함과 규칙적이고 체계적인 코드 작성, 캐싱을 통한 성능 향상!

React Query가 트렌드로 떠오르고 있는 이유를 알 것 같다.

최근 진행하는 사이드 프로젝트에서 적용할 수 있도록 할것이다!

## References

[카카오페이 프론트엔드 개발자들이 React Query를 선택한 이유](https://tech.kakaopay.com/post/react-query-1/)
