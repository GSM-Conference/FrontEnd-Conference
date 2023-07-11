## CSFR(Cross Site Request Forgery)란?!

<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FMvm4k%2FbtsmQgf3Ix2%2F7gO0EKkDSG1RNkOql6jWE1%2Fimg.png'/>

CSRF는 사용자가 현재 인증되어 있는 취약한 사이트에 악성 사이트가 보내는 공격이다.

이해하기 쉽도록 예시를 들어보겠다.

정\*\*씨는 여느 때와 다름 없이 불법 도박을 하려고 했다.  
정\*\*씨는 도박 자금을 뽑기 위해 금융 사이트에 로그인했다.  
정\*\*씨는 금융 사이트에서 로그아웃하는 것을 깜빡하고 불법 도박 사이트에서 도박을 하였다.  
정\*\*씨가 베팅하기 위해 버튼을 누르는 그 순간 정\*\*씨의 계좌에서 500만 원이 빠져나갔다.  
불법 도박 사이트에서 악성 코드나 요청을 포함한 페이지를 제공하였고  
사용자의 브라우저가 정\*\*씨의 세션을 가지고 있으므로 악성 요청이 발생할 수 있다.

CSRF는 사용자의 개인정보 탈취보다는 특정 작업을 무단으로 진행하기 위한 경우가 많다.  
하지만 CSRF도 권한을 탈취당하면 개인정보 또한 그대로 노출된다.

이와 같은 CSRF공격을 예방하기 위해서는 사용자의 요청을 신뢰할 수 있는 것인지 확인하는 매커니즘이 필요하다.

## CSRF 예방!

### USER

- 사용하지 않는 웹 어플리케이션은 로그아웃한다. CSRF는 사용자의 인증된 세션을 악용하는 공격 방식이기 때문에 로그아웃으로 공격 위험을 없앨 수 있다.
- 브라우저에 비밀번호를 저장하지 않는다. CSRF는 사용자의 브라우저를 대상으로 하기 때문에 비밀번호가 유출되어 CSRF 공격에 노출될 수 있다.
- 여러 웹사이트를 동시에 사용하지 않는다. 여러 웹사이트를 사용할 경우 CSRF 공격이 일어나도 공격이 발생했다는 사실을 알아차리기 쉽지 않다.

user 입장에서 CSRF 공격을 예방하기 위해 이러한 노력을 할 수 있지만 너무 귀찮고 불편하다.

### Developer

### Referer Check

Referer Check는 HTTP요청 헤더 중 하나인 Referer를 검증하여 요청이 어떤 출처에서 온 것인지 확인하는 것이다.  
이를 통해 요청이 적절한 출처에서 온 것이 아니라면 해당 요청을 거부할 수 있다.  
하지만 공격자가 Referer를 조작하여 출처를 위장할 수 있으므로 Referer Check는 완벽한 보안이라 할 수 없다.  
일반적으로는 Referer Check를 통해 대부분의 CSRF공격을 예방할 수 있다고 한다.

### CSRF Token

서버에 들어온 요청이 서버에서 허용하는 요청이 맞는지 토큰을 통해 확인할 수 있다.  
이 토큰을 CSRF 토큰이라 부른다.  
CSRF 토큰을 사용한다면 악성 사이트는 해당 토큰을 알 수 없으므로 악의적으로 사용자의 요청을 위조할 수 없다.  
서버는 요청을 받을 때에 토큰을 검증하여 사용자를 신뢰할 수 있는 요청인지 확인한다.

## CSRF Token 구현

1\. 사용자의 세션에 고유한 CSRF token을 생성하고 저장한다. 해당 token은 모든 요청에 사용될 수 있다.

2\. AJAX 요청 헤더에 CSRF token을 추가하여 전송한다.

```js
import axios from 'axios';

const csrfToken = 'token value';

const axiosInstance = axios.create({
  headers: {
    'X-CSRF-Token': csrfToken,
  },
});

axiosInstance.post('url', value).then . . . . .
```

axios 인스턴스를 사용하여 요청을 할 때에 CSRF token이 함께 전송된다.

3\. 서버는 헤더에서 CSRF token을 추출하여 기존 사용자의 세션에 있던 CSRF 토큰과 비교하여 일치하는지 확인한다. 만약 일치하지 않는다면 해당 요청을 거부하거나 처리하지 않는다.

4\. 보안을 강화하기 위해서는 CSRF token이 일정 시간이 흐른 뒤나 token사용시 갱신되어야 한다.

## 마치며

CSRF 공격을 예방하기 위해 악성 사이트 방문을 최대한 하면 안 된다.
특히 불법 도박 사이트 같은 경우는 절대로 접속해서는 안될 것이다.
불법 도박 사이트와 같은 인증되지 않은 악성 사이트에 접속하고 활동하는 행위는 정말 위험하고 불안정한 일이다.
확실하고 인증된 사이트를 만들기 위해 노력해야겠다.

## References

https://learn.microsoft.com/en-us/aspnet/web-api/overview/security/preventing-cross-site-request-forgery-csrf-attacks

https://docs.spring.io/spring-security/reference/features/exploits/csrf.html#csrf
