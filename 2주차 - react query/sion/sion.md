# React-Query

React Query라는 라이브러리에 대해 아시나요? 

현재 개발 생태계에서 높은 사용률을 보이고 있고 토스, 배민 등등 여러 회사들도 React-Query를 사용하고 있습니다. 왜 React-Query가 각광을 받는지, 어떤 장점이 있는지 알아보겠습니다!

![스크린샷 2023-05-12 오전 10.34.40.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a5af3efb-c020-405f-8f78-bd5073165f11/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_10.34.40.png)

![스크린샷 2023-05-12 오전 10.36.07.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b84542d2-678f-4d80-9aa5-18095e45a3a2/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_10.36.07.png)

![스크린샷 2023-05-12 오전 10.37.20.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e9dfceac-1282-4e6e-b372-60a3ce260acb/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_10.37.20.png)

![스크린샷 2023-05-12 오전 10.36.28.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e2cf7e6-8c72-462d-af7e-8d27a70239a9/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-12_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_10.36.28.png)

## 1. 소개

여기서 잠깐, **client state**와 **server state**의 차이점이 무엇인지 아시나요?

Client State란 클라이언트가 **자체적으로 생성한 상태**로 사용자의 input 값이나 UI 변경을 담당하는 부분으로 볼 수 있습니다. 즉, 서버에서 일어나는 일과는 아무 관련이 없는 상태들을 의미합니다.

반면 Server State란 클라이언트에 표시하는 데 필요한 **서버 데이터**를 의미합니다. 예를 들어, DB에 존재하는 데이터들을 의미합니다. 

React-Query는 React 애플리케이션에서 서버 state fetching, 캐싱, 동기화 및 업데이트 동작을 쉽게 다룰 수 있게 하며, Client State와 Server State를 명확하게 분리하여 관리할 수 있도록 도와주는 라이브러리입니다.

### 1-1. 기존 문제점

왜 이러한 라이브러리가 나오게 됐는지 React-Query가 나오기 전 문제점을 알아보겠습니다.

이렇게 영화 목록을 조회하는 api가 있습니다. 기존 api의 문제점은 다음과 같습니다. 

```tsx
const UserMovie = ({ id }: UserMovieProps) => {
  const [movie, setMovie] = useState<MovieDetailType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const { data }: MovieDetailDataType = await axios.get(
        `${process.env.BASE_URL}/${id}?api_key=${process.env.API_KEY}`,
      );
      setMovie(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>로딩중입니다.</h1>
      ) : (
        <div>{movie && <Movie movie={movie} />}</div>
      )}
    </>
  );
};
```

1. api로 불러온 server state를 client state로 다시 관리해야한다.
2. loading 상태도 따로 관리해야한다.
3. 처음 렌더링 될 때 api요청을 보내야 하기 때문에 useEffect를 사용해야 한다.
4. 모든 api 요청 보낼때 거의 똑같은 작업을 반복한다.

기존 상태관리 라이브러리 Redux, Recoil 등으로 관리할 수 있습니다. 하지만 클라이언트 쪽의 데이터들을 관리하기에는 적합할 순 있어도 서버 쪽의 데이터들을 관리하기에는 적합하지 않습니다.

### 1-2. 해결

React-Query를 적용한다면 다음과 같습니다: 

```tsx
const UserMovie = ({ id }: UserMovieProps) => {
  const getData = () => {
    return axios.get<MovieDetailType>(
      `${process.env.BASE_URL}/${id}?api_key=${process.env.API_KEY}`,
    );
  };

  const { data, isLoading } = useQuery(`getDetailMovie-${id}`, getData);

  return (
    <>
      {isLoading ? (
        <h1>로딩중입니다.</h1>
      ) : (
        <div>{data && <Movie movie={data?.data} />}</div>
      )}
    </>
  );
};

export default UserMovie;
```

React-Query를 사용해서 다음과 같은 문제를 해결하였습니다.

1. client state, server state 분리
    
     → useEffect, useState 없앰
    
2. 간단한 data fetching

## 2. 사용 목적

React-Query는 **server state를 관리**하기 위한 최고의 라이브러리입니다. 기본 구성 없이 놀라울 정도로 잘 작동하며, 애플리케이션이 커짐에 따라 원하는 대로 커스터마이징할 수 있습니다. React Query를 사용하면 서버 state의 까다로운 문제와 장애물을 물리치고 극복하며 앱 데이터가 사용자를 제어하기 전에 제어할 수 있습니다.

### 2-1. 장점

- 프로젝트 구조가 기존보다 단순해져 애플리케이션을 유지 보수하기 쉽고, 새로운 기능을 쉽게 구축할 수 있습니다.
- 데이터 캐싱을 쉽게 구현할 수 있다.
- 데이터 fetching 로직을 짧은 코드로 대체할 수 있다.
- client state와 server state를 분리할 수 있다.

## 마무리

### 느낀점

기존 서버 통신 로직은 이해하기도 어렵고 구조도 어렵다고 느껴졌는데, React-Query를 사용한다면 이러한 문제점들을 대체할 수 있기 때문에 인기가 많은 것 같다. 하지만 무작정 서버 통신에 대해 배우지 않고, React-Query를 사용하기보단 기존 문제점을 맞닥뜨리고 사용해야 더욱더 효율적으로 사용할 수 있을 것 같다. 

### References

[My구독의 React Query 전환기](https://tech.kakao.com/2022/06/13/react-query/)

[Client State vs Server State](https://velog.io/@kim98111/Client-State-vs-Server-State)

[React-Query with Next.js 서버 사이드 렌더링](https://velog.io/@arthur/React-Query-with-Next.js-서버-사이드-렌더링)