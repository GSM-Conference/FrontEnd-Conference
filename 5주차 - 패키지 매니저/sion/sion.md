평소같이 개발하던 중 의문이 들었습니다.

“우리가 프로젝트를 생성하고 실행하고, 라이브러리를 설치하는 이 yarn 명령어나 npm 명렁어는 도대체 뭘까??“

```tsx
npm i react-hook-form
yarn create next-app
pnpm dev
	.
	.
```

그래서 조사해봤습니다!

![yarn](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/58ce17ee-511a-4440-8104-3fea69808835/Untitled.png)

yarn

![pnpm](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0b2c4884-2641-4929-b0d3-ffc02d1976b7/Untitled.png)

pnpm

# 패키지 매니저 🙌

패키지 매니저란 말 그대로 프로그래밍 언어에서 사용되는 외부 패키지(라이브러리, 모듈 등)를 관리하는 도구입니다. 패키지 매니저를 사용하면 손쉽게 프로젝트에 필요한 외부 패키지를 설치, 업데이트, 삭제할 수 있습니다.

### 패키지 📦?

패키지는 라이브러리와 유사한 개념입니다. 라이브러리가 코드의 작성을 위해 사용되는 묶음이라면, 패키지는 코드의 배포를 위해 사용되는 묶음입니다.

예를들어 라이브러리는 **펜**이고, 펜으로 작성한 글을 책으로 출간할 수 있게 사용하는 **종이**들이 패키지입니다.

패키지는 다음 3가지 정보를 가지고 있는 코드의 배포 단위입니다.

- 컴파일한 소프트웨어의 바이너리
- 환경 설정
- 의존(dependency)에 관련된 정보

### 의존? dependency ?

많은 패키지들은 다른 패키지가 설치되어 있어야만 제대로 동작합니다.

- 이 경우 패키지를 제대로 동작시키기 위해 필요한 다른 패키지를 ‘dependency’라고 합니다.

만약 A라는 패키지를 설치했는데 A는 B라는 패키지를 기반으로 만들어진 거라면,
저희는 A패키지를 사용하기 위해 B 패키지를 설치해야 합니다.

- 근데 여기서 B 패키지가 또 C 패키지를 의존하고 있으면 어떡할까요?
  - C도 설치해야 합니다!

저희는 A 패키지만 사용하려고 했는데 B, C 두개의 패키지를 설치해야하는 상황이 온 것이죠. 이렇게 패키지들이 서로 너무 의존적으로 연결되어 사용자가 패키지 관리가 어려운 상황을 ‘dependency hell’이라고 합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c0b6b6c8-f214-4592-ab05-797165e85a4c/Untitled.png)

따라서 각각의 패키지가 자신의 dependency에 대한 정보를 가지게 한다면, 사용자가 사용하고자 하는 패키지의 dependency를 패키지 매니저를 통해 쉽게 설치하도록 도울 수 있습니다.

### 패키지 매니저가 하는 일

1. 패키지의 dependency 관리
2. 패키지의 모안 관리
3. 패키지 압축 해제
4. 여러 패키지를 기능에 따라 그룹으로 묶어 정리

   - dependencies: 런타임에 필요로 하는 패키지의 종속성을 정의
   - devDependencies: 개발 환경에서 필요로 하는 패키지의 종속성을 정의
   - peerDependencies: 패키지가 호스트 애플리케이션과 함께 사용될 때 필요한 종속성을 정의
     - 예를 들어 패키지 A가 B의 특정 버전과 함께 사용되어야 하는 경우, 패키지 A의 peerDependencies에 패키지 B와 해당 버전을 명시할 수 있습니다.

   ```tsx
   "dependencies": {
       "@types/node": "20.1.4",
       "axios": "^1.4.0",
       "eslint-config-custom": "workspace:^"
     },
     "devDependencies": {
       "tsconfig": "workspace:^"
     },
     "peerDependencies": {
       "@tanstack/react-query": "^4.29.7"
     }
   ```

### 다른 생태계의 패키지 매니저

| Language | Package Manager             |
| -------- | --------------------------- |
| Python   | pip                         |
| PHP      | Composer                    |
| Java     | Maven, Gradle               |
| Node.js  | npm, yarn, pnpm, yarn berry |

# (1) Npm

npm이란 Node Package Manager의 약자로, 말 그대로 노드 패키지를 관리해주는 툴입니다. npm에서는 package.json 파일로 프로젝트의 정보와 패키지들의 의존성을 관리합니다.

또한 npm은 온라인 플랫폼 역할을 합니다. 사람들이 노드 패키지를 만들고, 업로드 하고, 공유할 수 있는 공간으로 누구나 온라인 플랙폼에 게시된 패키지를 사용할 수 있습니다.

[npm](https://www.npmjs.com/)

### package.json

package.json에는 사용하고 이는 패키지들이 명세되어 있기 때문에 프로젝트를 다른 사람들과 쉽게 공유하여 개발환경을 빠르게 구축할 수 있습니다.

```tsx
{
	"name" : "test",
	"description" : "javascript's test programming.",
	"dependencies" : [],
	"main" : "test.js",
	"version" : "1.1.6"
	"scripts": {
	  "dev": "next dev",
	  "build": "next build",
	  "start": "next start",
	  "lint": "next lint"
	},
}
```

### 설치

npm은 node를 다운로드 하면 자동으로 설치됩니다.

# (2) Yarn

yarn은 Facebook에서 개발한 JavaScript 패키지 매니저로, npm과 비슷한 기능을 제공합니다. yarn은 npm보다 빠른 설치 속도와 보다 효율적인 캐싱기능을 가지고 있습니다. 또한 yarn.lock파일을 사용하여 패키지의 의존성을 관리합니다.

### 설치

yarn은 npm을 통해 설치합니다.

```tsx
npm install yarn --global
```

### npm과 yarn의 차이점 ⭐️

npm과 yarn은 기본적으로 비슷한 목적을 가지고 있지만, 몇가지 차이점을 가지고 있습니다.

1. 설치 프로세스를 처리하는 방법

   npm은 패키지를 한 번에 하나씩 순차적으로 설치합니다.

   yarn은 여러 패키지를 동시에 가져오고 설치하도록 최적화되어 있어 패키지 설치 속도 측면에서 npm보다 빠릅니다.

2. 보안 측면

   yarn은 보안 측면에서 npm보다 더 안전한 것으로 알려져 있습니다. npm은 자동으로 패키지에 포함된 다른 패키지 코드를 실행합니다. 이로 인해 보안 시스템에 몇 가지 취약성이 발생하며 나중에 심각한 문제가 발생할 수 있습니다. 반면에 yarn은 yarn.lock 또는 package.json파일에 있는 파일만을 설치합니다. 보안은 yarn의 핵심 기능 중 하나이지만 최근 npm의 업데이트에서 npm의 보안 업데이트도 크게 향상되었습니다.

두 도구는 대부분의 JavaScript 프로젝트에서 호환되며, 패키지 설치와 관리 작업에서 유사한 명령 및 기능을 제공합니다. 프로젝트에 따라 개발자가 선호하는 패키지 매니저를 선택하여 사용할 수 있습니다.

### but . . .😭

모든 측면에서 npm보다 yarn이 뛰어난 것 같지만 현재 2022년 9월 기준으로 yarn classic 업데이트가 멈췄습니다. 주요 이유로는 아마 yarn2(yarn berry)개발에 집중하고 있기 때문입니다. 따라서 새로운 프로젝트를 시작하거나 기존 프로젝트를 업그레이드 할 때에는 yarn classic은 지양하는 것이 좋을 것 같습니다. 그러나 기존에 yarn classic을 사용하고 있는 프로젝트라면 계속해서 yarn classic을 사용해도 문제 없이 유지할 수 있습니다.

![2022 9월에 멈춰있는 커밋, 이슈도 1800개](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3f0c4690-a677-41fa-a524-d03ff5f8f44b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-16_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_9.13.01.png)

2022 9월에 멈춰있는 커밋, 이슈도 1800개

# (3) Yarn Berry 🍒, Yarn2

Yarn Berry는 Yarn classic에서 어떠한 것을 개선했을까요?

Yarn Berry는 기존의 “깨져 있는” NPM 패키지 관리 시스템을 혁신적으로 개선합니다.

## NPM의 문제점

### 1. 비효율적인 의존성 검색

### 2. 비효율적인 설치

npm에서 구성하는 node_modules 디렉토리 구조는 매우 큰 공간을 차지합니다.
매우 복잡한 폴더구조를 가지고 있어 설치가 유효한지 검증하기가 어렵습니다.

### 3. 유령 의존성

npm및 yarn classic에서는 중복해서 설치되는 node_modules를 아끼기 위해 Hoisting 기법을 사용합니다.

## Plug’n’Play 🎮

Yarn Berry는 위에서 업근된 문제들을 새로운 Plug’n’Play 전략을 이용해서 해결합니다.

### 동작 방법

Plug’n’Play 설치모드에서 의존성을 설치했을 때, 기존과 다른 모습을 볼 수 있습니다.

![Before](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4ffc7409-6eeb-45e6-8f71-5a661727f08b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-06-16_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_9.37.05.png)

Before

Yarn Berry는 node_modules를 생성하지 않습니다. 대신 .yarn/cache폴더에 의존성의 정보가 저장되고, .pnp.cjs 파일에 의존성을 찾을 수 있는 정보가 기록됩니다.

### Plug’n’Play 적용, Yarn Berry 설치

```tsx
// 새로운 프로젝트 세팅 시,
$ yarn init -2

// 기존의 yarn classic인 프로젝트를 yarn berry로 migration 시
$ yarn set version berry // berry 활성화
$ yarn set version stable // yarn 최신버전으로 업데이트
```

## Zero Install

Yarn Berry는 Zero-Install 원칙을 따릅니다. 이는 의존성 패키지를 로컬 머신에 전역으로 설치하지 않고 프로젝트 디렉토리 내부에서 관리한다는 의미입니다. 이를 통해 프로젝트 간 충돌을 방지하고 일관된 개발 환경을 유지할 수 있습니다.

# (4) pnpm

pnpm도 yarn berry 같이 npm을 대체하기 위한 더 빠르고 효율적인 패키지 매니저를 목표로 합니다. pnpm은 패키지를 설치할 때 직접적으로 설치하는 방법 대신 심링크*(하드링크)*를 사용합니다.

lodash를 사용하는 패키지 **100개**가 있다고 가정하였을 때, npm이나 yarn을 사용할 경우, 각 폴더별로 lodash 패키지가 **100개**가 복사됩니다.

반면에 pnpm은 lodash를 **단 한번만 설치**하고, 다른 100개의 프로젝트에는 **심링크로 연결**하여, 용량 측면에서 효율적으로 패키지를 관리한다.

또한 yarn처럼 모노레포를 위한 기능이나, pnpmfile.js 파일을 작성해서 패키지 설치 과정에 대한 훅*(Hook)*도 작성할 수 있다.

그외에도 모노레포를 지원하고 효율적인 디스크를 사용한다는 장점이 있습니다.

### 설치

```tsx
npm install -g pnpm
```

# 마무리

### 느낀점

당연하게 생각했던 패키지 매니저들의 역할들과 각각의 차이점을 알아볼 수 있어서 좋았다. 추후에 모노레포를 구축해서 워크스페이스 기능도 사용해보고 싶다는 생각이 들었다. 한 블로그에 모든 내용을 담으려보니 자세한 내용은 생략된 부분이 많다. 추후에는 yarn berry, pnpm의 기능을 자세히 정리할 것이다!

### References

[패키지 매니저(Package Manager)란?](https://aahc.tistory.com/14)

[npm VS yarn | Cracking Vue.js](https://joshua1988.github.io/vue-camp/package-manager/npm-vs-yarn.html#npm)

[node_modules로부터 우리를 구원해 줄 Yarn Berry](https://toss.tech/article/node-modules-and-yarn-berry)

[pnpm, 플랫하지 않은 패키지 매니저](https://imch.dev/posts/pnpm-a-manager-what-is-not-flat/)

[Yarn 대신 pnpm으로 넘어간 3가지 이유](https://engineering.ab180.co/stories/yarn-to-pnpm)
