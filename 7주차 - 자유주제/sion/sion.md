# CORS

CORS는 Cross-Origin Resource Sharing의 약자로 "교차 출처 리소스 공유 정책"입니다.
한 origin에서 다른 origin의 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제입니다.

> 여기서 **교차 출처**라고 하는 것은 **다른 출처**를 의미합니다.

## Origin (출처)

URL은 마치 하나의 문자열 같아 보여도, 사실은 여러개의 구성 요소로 이루어져있습니다.

![스크린샷 2023-04-19 오전 9.45.09.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/933ac493-0a37-4133-8771-a4547ff6faa1/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-04-19_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_9.45.09.png)

여기서 Origin은 `Protocol`과 `Host` 그리고 `Port`를 합친 것을 의미합니다.

만약 Origin에 대해 감이 잡히지 않았다면 코드로 확인할 수 있습니다.

![스크린샷 2023-04-19 오전 9.50.24.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/095e3478-83b0-45c7-a0ab-eb11c0d37ca2/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-04-19_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_9.50.24.png)

### 동일 출처 정책 (Same-Origin Policy)

먼저 SOP(Same Origin Policy) 정책은 **동일한 출처에 대한 정책**을 말합니다.
SOP 정책은 '동일한 출처에서만 리소스를 공유할 수 있다.'라는 규칙을 가지고 있습니다. 즉, 동일 출처(Same-Origin) 서버에 있는 리소스는 자유로이 가져올수 있지만, 다른 출처(Cross-Origin) 서버에 있는 이미지나 유튜브 영상 같은 리소스는 상호작용이 불가능하다는 말입니다.

- [localhost:3000](http://localhost:3000) → [localhost:3000/1](http://localhost:3000/1) 요청 가능
- [localhost:3001](http://localhost:3001) → [localhost:3000/1](http://localhost:3000/1) 요청 불가능

동일 출처가 아닌 경우 접근을 차단하는 이유는 무엇일까요?
당연히 보안이 이유겠죠. 악의적인 외부 리소스를 막기 위해 브라우저에서 사전에 방지하는 것입니다.

### 동일 출처 Same Origin, 교차 출처 Cross Origin

[https://www.domain.com:3000](https://www.domain.com:3000/) Origin을 기준으로 동일 출처인지 비교해보겠습니다.

- 문제
  | URL |
  | ----------------------------------------------- |
  | https://www.domain.com:3000/about |
  | https://www.domain.com:3000/about?username=inpa |
  | http://www.domain.com:3000 |
  | https://www.another.co.kr:3000 |
  | https://www.domain.com:8888 |
  | https://www.domain.com |
- 정답
  | URL | 동일 출처 ? | 이유 |
  | ----------------------------------------------- | ----------- | -------------------------------- |
  | https://www.domain.com:3000/about | O | 프로토콜, 호스트, 포트 번호 동일 |
  | https://www.domain.com:3000/about?username=inpa | O | 프로토콜, 호스트, 포트 번호 동일 |
  | http://www.domain.com:3000 | X | 프로토콜 다름 (http ≠ https) |
  | https://www.another.co.kr:3000 | X | 호스트 다름 |
  | https://www.domain.com:8888 | X | 포트 번호 다름 |
  | https://www.domain.com | X | 포트 번호 다름 (443 ≠ 3000) |

## 요청 방식에 따라 CORS에러 발생 여부

### (1) \***\*<img>, <video>, <script>, <link> 태그 등\*\***

> 기본적으로 **Cross-Origin** 정책을 지원함

\***\*<img>, <video>, <script>, <link>\*\***태그는 Cross-Origin 정책을 지원하기 때문에 Origin이 다른 사이트끼리 요청을 지원합니다. 그렇기 때문에 저희가 외부에서 스크립트를 불러오고 이미지를 불러올 수 있는거죠.

```jsx
// 웹 폰트 불러오기
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;"
  rel="stylesheet"
/>
// 외부 이미지 불러오기
<img src="https://thumb.mt.co.kr/06/2022/08/2022080107123741943_1.jpg/dims/optimize/" />
```

### (2) \***\*XMLHttpRequest, Fetch API 스크립트\*\***

> 기본적으로 **Same-Origin** 정책을 따름

자바스크립트에서의 요청은 기본적으로 [동일 출처 정책](https://www.notion.so/Cross-Origin-Resource-Sharing-CORS-872d3cb000974eed84cf696399557666?pvs=21)(SOP)을 지원하기 때문에 서로 다른 Origin에 대한 요청을 보안상 제한합니다.

요청 방식에 따라 다른 CORS 발생 여부를 좀 더 이해하기 쉽게 코드로 살펴봅시다.
이미지를 각각 다른 방식으로 불러오겠습니다.

1. img 태그
2. ajax로 요청

```jsx
<body>
    <img src="https://third-party-test.glitch.me/check.svg" alt="이미지">

    <script>
        fetch('https://third-party-test.glitch.me/check.svg')
            .then(response => response.blob())
            .then(imgBlob => {
                const imageObjectURL = URL.createObjectURL(imgBlob); // 응답 받은 이미지를 blob 객체로 변환
                const img = document.createElement('img'); // 이미지 태그를 생성하고
                img.src = imageObjectURL; // 이미지 경로를 설정한뒤
                document.body.append(img); // html에 추가
            })
    </script>
</body>
```

다음과 같은 결과가 나타난 것을 볼 수 있습니다.

![스크린샷 2023-04-19 오전 10.01.52.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6f05f53d-cbe4-4342-ab4a-43bfb7887560/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-04-19_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_10.01.52.png)

이와 같이 ajax로 다른 origin에 요청을 하면 CORS 정책에 위반한 것을 알 수 있습니다.

## CORS 해결

이제 CORS를 한마디로 정리하자면 **다른 출처의 리소스 공유에 대한 허용/비허용 정책**입니다.  
아무리 보안이 중요하지만, 개발을 하다 보면 기능상 어쩔 수 없이 다른 출처 간의 상호작용을 해야 하는 케이스도 있으며, 또한 실무적으로 다른 회사의 서버 API를 이용해야 하는 상황도 존재합니다. 따라서 이와 같은 예외 사항을 두기 위해 CORS 정책을 허용하는 리소스에 한해 다른 출처라도 받아들인다는 것이죠.

다시 아까 에러 메세지를 봐보죠.

<aside>
🚨 Access to fetch at ‘https://api.com’ from origin ‘http://localhost:3000’ has been blocked by CORS policy: No ‘Access-Control-Allow-Origin’ header is present on the requested resource. If an opaque response serves your needs, set the request’s mode to ‘no-cors’ to fetch the resource with CORS disabled.

</aside>

> 'https://api.com'에서 'https://localhost:3000' 출처로 가져올 수 있는 액세스가 CORS 정책에 의해 차단되었습니다. 요청된 리소스에 'Access-Control-Allow-Origin' 헤더가 없습니다. 불투명한 응답이 필요에 적합한 경우, 요청 모드를 'no-cors'로 설정하여 CORS가 비활성화된 리소스를 가져오십시오.

이 에러메세지는 사실 브라우저의 SOP 정책에 따라 다른 출처의 리소스를 차단하면서 발생된 에러입니다.
SOP 정책을 위반해도 CORS 정책을 따르면 다른 출처의 리소스를 허용한다는 뜻입니다.

### 브라우저 기본 동작 살펴보기

1. 클라이언트에서 HTTP 요청의 헤더에 Origin을 담아 전달
   - 기본적으로 브라우저 요청 헤더에 Origin 값을 담아 보낸다.
     ![스크린샷 2023-04-19 오후 2.37.31.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4a7ae35d-93ed-4dd5-b3c8-38098f4dfe06/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-04-19_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.37.31.png)
2. 서버는 응답헤더에 Access-Control-Allow-Origin을 담아 클라이언트로 전달
   - 서버가 이 요청에 대한 응답을 할 때 응답 헤더에 Access-Control-Allow-Origin이라는 필드를 추가하고 값으로 '이 리소스를 접근하는 것이 허용된 출처 url'을 보낸다.
3. 클라이언트에서 Origin과 서버가 보내준 Access-Control-Allow-Origin을 비교한다.
   - 이후 응답을 받은 브라우저는 자신이 보냈던 요청의 Origin과 서버가 보내준 응답의 Access-Control-Allow-Origin을 비교해본 후 차단할지 말지를 결정한다.
   - 만약 유효하지 않다면 CORS 에러가 발생한다.
   - 위의 경우에는 둘다 http://localhost:3000이기 때문에 유효하니 다른 출처의 리소스를 문제없이 가져오게 된다.

### (1) Access-Control-Allow-Origin

서버에서 Access-Control-Allow-Origin 헤더에 허용할 origin을 기재해서 클라이언트에 응답하면 됩니다.

```jsx
// * 이면 모든 곳에 공개되어 있음을 의미한다.
Access-Control-Allow-Origin : *

Access-Control-Allow-Origin : https://naver.com
```

### (2) Proxy

프록시 서버는 클라이언트가 프록시 서버 자신을 통해서 다른 네트워크 서비스에 간접적으로 접속할 수 있게 해줍니다. 브라우저와 서버간의 통신을 도와주는 중계서버입니다. 프록서 \*_\*\*서버를 사용하면 중간에 요청을 가로채서 `Access-Control-Allow-Origin : _` 를 설정해서 응답해줍니다.

대표적인 proxy 서버를 이용하는 방법은 package.json에서 proxy 필드를 설정하는 것이 있습니다. 예를 들어, `http://localhost:5000` \***\*주소의 프록시 서버를 사용하려면, package.json \*\***파일에 다음과 같이 추가합니다.

```jsx
{
  "name": "my-react-app",
  "version": "0.1.0",
  "proxy": "http://localhost:5000",
  ...
}
```

하지만 이 설정은 개발 환경에서만 적용되며, 배포 환경에서는 별도로 설정해야 합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/541129de-58f2-4934-97f8-549cd58bf6e1/Untitled.png)

## 정리

### 면접

Q: CORS가 무엇이고, CORS에러를 어떻게 해결하시나요?

A:

- CORS는 다른 출처의 리소스 공유에 대한 허용/비허용 정책입니다.
- 기본적으로 브라우저는 SOP 정책으로 같은 Origin에서만 리소스를 공유할 수 있습니다.
  하지만 개발하다보면 외부 api에 요청할 때가 옵니다. 그럴때 CORS 정책을 허용하여 외부 origin을 요청해야 합니다.
  CORS를 허용하려면 서버에서 AccessControl AllowOrigin에 origin을 허용시키거나 proxy 서버를 사용하여 해결할 수 있습니다.

### References

[CORS는 왜 이렇게 우리를 힘들게 하는걸까?](https://evan-moon.github.io/2020/05/21/about-cors/)

[🌐 악명 높은 CORS 개념 & 해결법 - 정리 끝판왕 👏](https://inpa.tistory.com/entry/WEB-📚-CORS-💯-정리-해결-방법-👏)
84 changes: 0 additions & 84 deletions84  
8주차 - FE 보안/seungje/seungje.md
View full
Viewed
@@ -1,84 +0,0 @@

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
126 changes: 0 additions & 126 deletions126  
8주차 - FE 보안/sion/sion.md
View full
Viewed
@@ -1,126 +0,0 @@

# 🏠. 브라우저 저장소

브라우저 저장소는 크게 2가지로 구분이 됩니다.

- **웹 스토리지(Web Storage):**
  웹 데이터를 클라이언트에 저장하기 위해 만들어진 key-value 형식의 저장소.
- **쿠키(Cookie):**
  서버와 클라이언트 간의 지속적인 데이터 교환을 위해 만들어진 key-value 형식의 저장소

## 📦. 웹 스토리지 (Web Storage)

웹 스토리지도 2가지로 나눌 수 있습니다.

- 로컬 스토리지(Local Storage)
- 세션 스토리지(Session Storage)

로컬 스토리지와 세션 스토리지의 차이점은 영구성과 범위에 있어서 크게 차이가 납니다.

먼저 로컬 스토리지는 브라우저를 종료해도 데이터를 보관합니다.**(영구성)**
또한 도메인만 같으면 전역적으로 공유되는 특정을 가지고 있습니다.**(공유성)**

하지만, 세션 스토리지는 브라우저가 종료되면 데이터가 삭제됩니다.**(비영구성)**
그리고 도메인이 같더라도 브라우저가 다르면 브라우저 컨택스트가 다르기 때문에 각각의 세션 스토리지가 형성되어 데이터가 공유되지 않습니다.**(비공유성)**

## 🍪. 쿠키(Cookie)

쿠키는 서버와 클라이언트가 지속적으로 데이터 교환을 하기 위해 만들어졌습니다.

예를들어 우리가 HTTP 요청을 보낼 때 서버에 특정 요청을 보내면 서버는 요청 자체만으로는 이 요청을 누가 보낸 것인지 알 수 없습니다. 이 때 우리는 쿠키에 정보를 담아 서버에 보내면 서버는 쿠키를 읽어 요청자를 파악합니다. 쿠키는 4KB 용량 제한을 가지고 있으며 한 사이트당 20개의 쿠키를 가질 수 있습니다.

또한 쿠키는 만료기한을 지정할 수 있습니다. 쿠키는 서버와의 통신을 목적으로 만들어졌기 때문에 더 주의해야 됩니다. 쿠키에 쓸데없는 값이 많다면 그만큼 네트워크 트래픽이 증가하게 됩니다.

## 📦 VS 🍪. 웹 스토리지와 쿠키의 차이

웹 스토리지는 쿠키와 달리 서버에 전송되지 않고 명시적으로만 전송이 가능하기 때문에 부담이 가지 않습니다. 또한, 필요한 경우에만 꺼내 쓰는 것임으로 자동 전송의 위험성이 없으며, 다른 origin이 요청할 때에는 꺼내쓰고 싶어도 origin 단위로 접근이 제한되는 특성 덕분에 값을 꺼내 쓸 수 없습니다.

웹 스토리지는 쿠키에 비해 용량이 넉넉합니다.

# 🔐. 브라우저 스토리지 보안

1. **중요한 데이터는 암호화:**

   브라우저 스토리지는 말그대로 브라우저에 데이터를 저장하는 저장소입니다. 브라우저 이기 때문에 당연히 사용자가 브라우저 스토리지에 저장된 데이터를 조회 및 삭제 그리고 수정도 할 수 있습니다.

   그렇기 때문에 민감한 데이터를 저장할 때에는 해당 데이터를 암호화 하여 저장해야 합니다. 암호화된 데이터는 저장소에 저장되기 전에 암호화되어야 하며, 사용 시에는 복호화되어야 합니다.

2. **용도에 맞게 사용:**

   로컬 스토리지, 세션 스토리지, 쿠키는 각각 다른 용도로 사용됩니다.
   중요한 데이터의 저장에는 보안 강화를 위해 로컬 스토리지 대신 영구적이지 않은 세션 스토리지를 사용하는 것이 좋습니다.

3. **쿠키 속성 설정:**

   쿠키를 사용할 때는 적절한 속성을 설정해야 합니다.

   예를 들어, **secure** 속성을 설정하여 HTTPS 연결에서만 쿠키를 전송하도록 하고,
   **httpOnly** 속성을 설정하여 JavaScript에서 쿠키에 접근할 수 없도록 합니다.

   ```tsx
   // 중요한 정보를 담은 쿠키 설정 (예: 인증 토큰)
   document.cookie = "authToken=abc123; Path=/; HttpOnly; Secure";
   ```

4. **CSRF 공격 방어:**

   중요한 작업을 수행하는 요청에는 CSRF 토큰을 사용하여 요청의 유효성을 검증해야합니다. CSRF 공격을 통해 악의적인 사용자가 쿠키를 이용하여 특정 동작을 수행할 수 있는 것을 방지할 수 있습니다.

   **CSRF(Cross Site Request Forgery) 공격이란?**

   CSRF 공격은 웹 에플리케이션 취약점 중 하나로 인터넷 사용자가 자신의 의지와는 무관하게 공격자가 의도한 행위를 특정 웹사이트에 요청하게 만드는 공격입니다.

   ```tsx
   const csrfToken = "..."; // 서버로부터 전달받은 CSRF 토큰

   // 요청 시 CSRF 토큰을 함께 전송
   fetch("/api/some-endpoint", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       "X-CSRF-Token": csrfToken, // CSRF 토큰을 헤더에 포함
     },
     body: JSON.stringify(data),
   });
   ```

5. **SameSite 쿠키 속성 설정:**

   SameSite 쿠키 속성을 설정하여 사이트 간 요청 위조 공격을 방지할 수 있습니다. SameSite 속성을 “Strict”로 설정하면 같은 사이트에서만 쿠키를 전송하고, 외부 사이트로는 전송되지 않도록 할 수 있습니다.

6. **사용자 입력 검증:**

   사용자로부터 받은 입력값을 스토리지에 저장할 수 있는지 검증을 해야합니다.
   유효성 검사는 스토리지에 저장하는 것 이외에도 서버로 데이터를 전송하기 전에도 검증해야합니다.

   ```tsx
   const handleSubmit = (event) => {
     event.preventDefault();

     const inputValue = event.target.value;

     // 입력 값 유효성 검사
     if (inputValue.match(/^[A-Za-z0-9]+$/)) {
       // 유효한 경우 서버로 전송
       // ...
     } else {
       // 유효하지 않은 경우 에러 처리
       // ...
     }
   };
   ```

## 마무리

### 느낀점

이외에도 보안을 위해 신경써줘야 하는 부분이 많다는 것을 알게 되었다.

보안은 데이터를 가지고 있는 백엔드만 신경 써야하는게 아니라, 데이터를 보내는 프론트엔드도 신경을 써야한다고 다시 생각하게 되었다.

### References

[브라우저 저장소( 로컬 스토리지, 세션 스토리지, 쿠키 )](https://ryuhojin.tistory.com/10)

[[Web] HTTP Only와 Secure Cookie 이해하기](https://nsinc.tistory.com/121)

[CSRF 공격이란? 그리고 CSRF 방어 방법](https://itstory.tk/entry/CSRF-공격이란-그리고-CSRF-방어-방법)
