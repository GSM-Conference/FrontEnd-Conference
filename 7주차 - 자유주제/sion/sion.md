# CORS

CORS는 Cross-Origin Resource Sharing의 약자로 "교차 출처 리소스 공유 정책"입니다.
한 origin에서 다른 origin의 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제입니다.

> 여기서 **교차 출처**라고 하는 것은 **다른 출처**를 의미합니다.

## Origin (출처)

URL은 마치 하나의 문자열 같아 보여도, 사실은 여러개의 구성 요소로 이루어져있습니다.

![스크린샷 2023-04-19 오전 9.45.09.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/933ac493-0a37-4133-8771-a4547ff6faa1/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-04-19_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_9.45.09.png)

여기서 Origin은 `Protocol`과 `Host` 그리고 `Port`를 합친 것을 의미합니다.

만약 Origin에 대해 감이 잡히지 않았다면 코드로 확인할 수 있습니다.

![스크린샷 2023-04-19 오전 9.50.24.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/095e3478-83b0-45c7-a0ab-eb11c0d37ca2/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-04-19_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_9.50.24.png)

### 동일 출처 정책 (Same-Origin Policy)

먼저 SOP(Same Origin Policy) 정책은 **동일한 출처에 대한 정책**을 말합니다.
SOP 정책은 '동일한 출처에서만 리소스를 공유할 수 있다.'라는 규칙을 가지고 있습니다. 즉, 동일 출처(Same-Origin) 서버에 있는 리소스는 자유로이 가져올수 있지만, 다른 출처(Cross-Origin) 서버에 있는 이미지나 유튜브 영상 같은 리소스는 상호작용이 불가능하다는 말입니다.

- [localhost:3000](http://localhost:3000) → [localhost:3000/1](http://localhost:3000/1) 요청 가능
- [localhost:3001](http://localhost:3001) → [localhost:3000/1](http://localhost:3000/1) 요청 불가능

동일 출처가 아닌 경우 접근을 차단하는 이유는 무엇일까요?
당연히 보안이 이유겠죠. 악의적인 외부 리소스를 막기 위해 브라우저에서 사전에 방지하는 것입니다.

### 동일 출처 Same Origin, 교차 출처 Cross Origin

[https://www.domain.com:3000](https://www.domain.com:3000/) Origin을 기준으로 동일 출처인지 비교해보겠습니다.

- 문제
  | URL                                             |
  | ----------------------------------------------- |
  | https://www.domain.com:3000/about               |
  | https://www.domain.com:3000/about?username=inpa |
  | http://www.domain.com:3000                      |
  | https://www.another.co.kr:3000                  |
  | https://www.domain.com:8888                     |
  | https://www.domain.com                          |
- 정답
  | URL                                             | 동일 출처 ? | 이유                             |
  | ----------------------------------------------- | ----------- | -------------------------------- |
  | https://www.domain.com:3000/about               | O           | 프로토콜, 호스트, 포트 번호 동일 |
  | https://www.domain.com:3000/about?username=inpa | O           | 프로토콜, 호스트, 포트 번호 동일 |
  | http://www.domain.com:3000                      | X           | 프로토콜 다름 (http ≠ https)     |
  | https://www.another.co.kr:3000                  | X           | 호스트 다름                      |
  | https://www.domain.com:8888                     | X           | 포트 번호 다름                   |
  | https://www.domain.com                          | X           | 포트 번호 다름 (443 ≠ 3000)      |

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
   - 서버가 이 요청에 대한 응답을 할 때 응답 헤더에 Access-Control-Allow-Origin이라는 필드를 추가하고 값으로 '이 리소스를 접근하는 것이 허용된 출처 url'을 보낸다.
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

프록시 서버는 클라이언트가 프록시 서버 자신을 통해서 다른 네트워크 서비스에 간접적으로 접속할 수 있게 해줍니다. 브라우저와 서버간의 통신을 도와주는 중계서버입니다. 프록서 \*_\*\*서버를 사용하면 중간에 요청을 가로채서 `Access-Control-Allow-Origin : _` 를 설정해서 응답해줍니다.

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
