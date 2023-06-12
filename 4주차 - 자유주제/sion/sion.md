이전에 했던 프로젝트에서 매번 요청마다 401일 때 refresh 처리 로직을 작성해서 중복 코드가 많았다.

하지만, axios interceptor로 기본 세팅만 해주면 refresh 처리를 쉽게할 수 있다. 이번에 2개 프로젝트를 하면서 axios interceptor를 적용한 과정을 적어보려고 한다!

## 기존 인증&인가 방식의 문제점 ! !

Http의 가장 큰 특징은 비연결성, 무상태성입니다. 즉, 한번 요청과 응답을 통하면 똑같은 일을 하기 위해서라도 동일한 정보를 전송하고 받아야 한다는 말입니다. 이를 보완하기 위해 나온 기술이 `Cookie`와 `Session`입니다.

\***\*쿠키\*\***

- 특징
  - 클라이언트 측에서 관리합니다.
  - 서버에서 클라이언트로 전송되어 자동으로 브라우저에 저장되며, 이후 클라이언트가 동일한 서버에 요청을 보낼 때마다 쿠키가 요청과 함께 서버로 전송됩니다.
- 단점
  - 보안에 취약할 수 있습니다. 쿠키는 클라이언트 측에 저장되기 때문에 악의적인 사용자가 쿠키를 조작하거나 탈취할 수 있습니다.
  - 저장할 수 있는 데이터의 용량에 제한이 있습니다. 하나의 도메인당 쿠키의 개수와 용량에는 제한이 있으며, 너무 많은 쿠키가 저장되면 성능에 영향을 줄 수 있습니다.
  - 클라이언트 측에서 제어되므로, 클라이언트가 쿠키를 비활성화하거나 거부할 수 있습니다.

**세션**

- 특징
  - 서버 측에 상태 정보를 유지하기 위해 사용됩니다.
  - 클라이언트는 세션 ID를 서버에 전송하여 서버가 클라이언트를 식별하고 해당 세션에 대한 상태 정보를 유지합니다.
  - 일반적으로 세션 데이터는 서버의 메모리, 데이터베이스 등에 저장됩니다.
  - 세션은 서버 측에서 직접 관리되기 때문에 보안이 강화될 수 있습니다.
- 단점
  - 서버 자원을 사용하여 세션 데이터를 유지해야 하므로 서버의 부하가 증가할 수 있습니다. 많은 수의 동시 접속자가 있는 경우 서버 성능에 영향을 줄 수 있습니다.
  - 클라이언트의 상태 정보를 서버에서 유지하므로, 상태 정보를 전송해야 하는 모든 요청마다 세션 ID가 필요하게 되어 네트워크 부하가 증가할 수 있습니다.

쿠키와 세션의 단점을 보완하기 위해 나온 것이 JWT입니다!

## JWT (Json Web Token)

먼저 JWT에 대해 알아보자.

JWT는 웹에서 사용되는 JSON 형식의 토큰에 대한 표준 규격입니다. 주로 사용자의 인증(authentication) 또는 인가(authorization) 정보를 서버와 클라이언트 간에 안전하게 주고 받기 위해서 사용됩니다.

- 인증(authentication)
  사용자의 신원을 확인하고 확인된 사용자가 자격이 있는지 확인하는 과정
  사용자가 자신의 신원을 증명하고, 시스템이 해당 신원을 검증하여 사용자를 식별하는 것을 의미
  ex) 로그인, api 요청 인증
- 인가(authorization)
  인증된 사용자가 특정 리소스에 접근하거나 특정 작업을 수행할 수 있는 권한을 부여하는 과정
  ex) 로그인 후 페이지 접근 가능

간단히 말하면, 인증은 "누구인가?"를 확인하고, 인가는 "무엇을 할 수 있는가?"를 결정하는 과정입니다.

### JWT 방식

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/980891d7-60b4-49cb-8484-0bb820821c84/Untitled.png)

JWT 방식을 알기위해선 `AccessToken`과 `RefreshToken` 두개의 토큰에 대해 구별만 하면 됩니다.

- AccessToken: 로그인 이후에 발급되는 토큰, 리소스에 접근할 때 사용
- RefreshToken: AccessToken의 만료시간이 지났을 때, 새로운 AccessToken을 발급받을 수 있는 권한을 제공하는 토큰

예시로 설명하겠습니다.

1. 먼저 제가 구글에 로그인 합니다.

   로그인 요청 후에서 서버는 token을 클라이언트에게 응답 값으로 전달합니다.

   클라이언트는 서버에게서 받은 token 값을 저장합니다. ( 대부분 localStorage에 저장 )

2. 로그인 후 제가 “개발 잘하는 방법”에 대해 검색을 합니다.

   그러면 클라이언트는 header에 AccessToken을 담아 요청을 보냅니다.

3. 서버는 응답으로 온 AccessToken이 유효한지 검사합니다.
   1. 유효하다면 제가 요청한 “개발 잘하는 방법”에 대한 응답 값을 보냅니다.
   2. 유효하지 않다면 RefreshToken을 서버에게 보내 새로운 AccessToken과 RefreshToken을 발급 받습니다.
4. 이런 과정을 반복하다 RefreshToken도 유효시간이 끝났다면 다시 로그인을 해서 token을 발급 받아야 합니다.

AccessToken은 카드입니다. 저희가 물건을 구입해야할 때마다 카드로 돈을 지불하듯이, 서버에 요청할 때마다 AccessToken으로 인증 절차를 거쳐야 합니다.

RefreshToken은 신분증입니다. 이 카드를 얼마나 신뢰할 수 있는지 알려줍니다. 여권도 5년마다 재발급 하듯이 RefreshToken도 가끔은 재발급이 필요합니다. AccessToken이 유효한지 서버한테 알려주는 역할을 하죠.

### JWT 장단점

**장점**

1. 서버 부하 감소

   세션 인증과 달리 서버에 상태를 유지할 필요가 없기때문에 서버의 부하를 감소시킬 수 있습니다.

2. 확장성이 뛰어납니다.

   JWT는 서버의 성태를 유지하지 않고 토큰을 전달하기 때문에 서버 간의 확장성이 높습니다. 여러 서버에서 동일한 토큰을 인증하고 처리할 수 있습니다.

**\*\***단점**\*\***

1. 토큰 만료와 갱신 처리

   JWT에는 토큰의 만료 시간을 설정할 수 있지만, 만료된 토큰은 서버에서 검증되지 않습니다. 따라서 토큰의 유효 기간을 관리하고 만료된 토큰을 갱신하는 추가적인 로직이 필요합니다.

2. 토큰의 안전한 저장과 관리

   JWT 토큰을 안전하게 저장하고 관리해야 합니다. 클라이언트 측에서 토큰을 저장하는 경우에는 쿠키나 안전한 저장소를 사용해야 합니다.

## Axios Interceptor ?

Axios Interceptor은 HTTP 요청과 응답에 대한 전역적인 처리를 수행하는 기능입니다.

Interceptor는 요청 전송 전(pre-request) 또는 응답 처리 후(post-response)에 실행되는 함수로서, 요청 또는 응답 데이터를 수정하거나 에러 처리 등을 수행할 수 있습니다.

### Interceptor 장점

Interceptor를 사용하면 모든 axios 요청과 응답에 대해 공통적인 동작을 수행할 수 있어 코드의 중복을 피하고 효율적으로 관리할 수 있습니다. 일반적으로 토근 인증, 로깅, 오류 처리 등에 활용됩니다.

```jsx
// 요청 인터셉터 추가하기
axios.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행

    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행

    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가하기
axios.interceptors.response.use(
  function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행

    return response;
  },
  function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행

    return Promise.reject(error);
  }
);
```

이렇게 `axios.interceptors`에 접근할 수 있습니다.

또한 `request`에 접근하면 요청하기 전 작업을 수행하고, `response`에 접근하면 응답 후 작업을 수행합니다. 각각 방식에 맞는 에러 처리도 가능합니다.

`eject`로 interceptor를 제거할 수 있습니다.

```jsx
const myInterceptor = axios.interceptors.request.use(function () {
  /*...*/
});
axios.interceptors.request.eject(myInterceptor);
```

## JWT 방식 구현하기

코드를 작성하기 전에 요청 전, 요청 후 처리해야할 작업을 정리해보겠습니다.

먼저 요청 전에는 헤더에 accessToken을 담는 작업을 수행해야 합니다.

요청후에는 다음과 같은 작업이 이루어져야 합니다:

- refreshToken으로 새로운 token 요청을 받은 후 token 저장
- refreshToken 요청 실패 시 로그인 페이지로 이동

### 요청 전

아까 요청 전에 수행하는 작업은 `axios.interceptors.request` 에 접근하면 된다고 했죠?
다음과 같이 코드를 작성할 수 있습니다:

```jsx
// 요청 인터셉터 추가
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
```

********\*\*\*\*********요청 성공********\*\*\*\*********

```jsx
config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
```

`config`는 HTTP 요청 설정을 포함하는 객체입니다.
일반적으로 config 객체는 다음과 같은 속성을 가질 수 있습니다:

- url: HTTP 요청 URL 주소
- method: 요청 HTTP 메서드 ex) get, post
- headers: 요청 헤더
- params: 쿼리 문자열로 전달되는 요청 매개변수
- data: 요청 바디에 답길 데이터
- timeout: 요청이 실패하기 전에 대기할 시간
- 등등…

이 코드는 요청이 성공했을 때 config를 return 해주는 코드입니다. localStorage에 토큰이 있다면 header에 토큰을 담아 HTTP 요청을 합니다.

**요청 실패**

```jsx
  error => {
    return Promise.reject(error);
  },
```

이 코드는 요청이 실패했을 때 error를 return 해주는 코드입니다. 여기서 에러 처리를 하여 공통으로 처리해줄 수도 있고, 각각 api 요청마다 에러 처리를 해줄 수도 있습니다.

### 요청 후

요청 성공 후 `axios.interceptors.response` 를 사용하여 다음과 같이 코드를 작성할 수 있습니다:

```jsx
// 응답 인터셉터 추가
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // 응답 오류 처리
    if (error.response.status === 401 && !error.config.__isRetryRequest) {
      if (
        !window.localStorage.getItem("accessToken") &&
        !window.localStorage.getItem("refreshToken")
      ) {
        localStorage.clear();
        window.location.replace("/gauth");
      }
      const { data }: { data: TokenType } = await refreshToken();
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      // 기존 요청을 복원하여 다시 보냄
      const config = error.config;
      config.headers.Authorization = `Bearer ${data.accessToken}`;
      error.config.__isRetryRequest = true;
      return instance(config);
    }
    return Promise.reject(error);
  }
);
```

********\*\*\*\*********요청 성공********\*\*\*\*********

```jsx
response => {
    return response;
  },
```

요청이 성공했으면 응답을 반환합니다. 그 외 처리는 하지않습니다.

********\*\*\*\*********요청 실패********\*\*\*\*********

```jsx
  async error => {
    // 응답 오류 처리
    if (error.response.status === 401 && !error.config.__isRetryRequest) {
      if (
        !window.localStorage.getItem('accessToken') &&
        !window.localStorage.getItem('refreshToken')
      ) {
        localStorage.clear();
        window.location.replace('/gauth');
      }
      const { data }: { data: TokenType } = await refreshToken();
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      // 기존 요청을 복원하여 다시 보냄
      const config = error.config;
      config.headers.Authorization = `Bearer ${data.accessToken}`;
      error.config.__isRetryRequest = true;
      return instance(config);
    }
    return Promise.reject(error);
  },
```

1. 요청이 실패했다면 그 실패 원인이 토큰이 없어서인지 확인합니다.

   ```jsx
   if (error.response.status === 401 && !error.config.__isRetryRequest)
   ```

   - `error.response.status === 401` 401 에러 상태코드는 인증되지 않은 사용자가 요청했을 때 발생합니다.
   - `error.config.__isRetryRequest` 는 요청 재시도를 나타내는지 확인하는 내부 속성입니다.
     if 조건문에 재시도가 아닐때를 추가하여 interceptor가 계속 실행되는 버그를 막아줍니다.

2. 만약 토큰이 둘다 없는데 요청이 왔다면 로그인 페이지로 이동시킵니다.

   ```jsx
   if (
     !window.localStorage.getItem("accessToken") &&
     !window.localStorage.getItem("refreshToken")
   ) {
     localStorage.clear();
     window.location.replace("이동할 페이지 주소");
   }
   ```

3. 만약 accessToken이 만료된 상황이라면 refresh 요청을 합니다.

   ```jsx
   const data = refreshToken_요청();
   ```

4. 요청 받은 새로운 token을 localStorage에 저장합니다.

   ```jsx
   localStorage.setItem("accessToken", data.accessToken);
   localStorage.setItem("refreshToken", data.refreshToken);
   ```

5. 토큰 설정 이후 실패한 요청을 다시 요청 시도합니다.

   ```jsx
   const config = error.config;
   config.headers.Authorization = `Bearer ${data.accessToken}`;
   error.config.__isRetryRequest = true;
   return instance(config);
   ```

   - `config.headers.Authorization = `Bearer ${data.accessToken}`;`
     config 설정을 새로 해줍니다.
   - `error.config.__isRetryRequest = true;` 재시도된 요청임을 표시합니다.
     아까 조건문에 `!error.config.__isRetryRequest`이 없었더라면 무한으로 요청될 것입니다.
   - `instance(config);` 는 새로 설정한 config로 이전에 실패한 요청을 다시 시도합니다.
     - instance는 커스텀 인스턴스이기 때문에 기본 인스턴스라면 `axios(config)`를 호출하면 됩니다.

## 마무리

axios interceptor는 중복된 코드를 줄여주는 좋은 기능인 것 같다. 현재는 refresh 로직을 작성하는 정도로 사용하긴 하지만, 나중에는 예외처리, 응답처리까지 다양하게 기능을 써보고 싶다.

### References

[[Web] JWT 토큰을 알아보자](https://overcome-the-limits.tistory.com/537?category=910209)

[JWT - Json Web Token](https://www.daleseo.com/jwt/)

[인터셉터 | Axios Docs](https://axios-http.com/kr/docs/interceptors)
