# 패키지 매니저

## 패키지 매니저란?

- ##### 패키지 매니저는 패키지를 관리하는 작업을 자동화, 안전처리 하기 위해 사용되는 도구이다.

* ##### 또 패키지를 다루는 작업을 편리하고 안전하게 수행하기 위해 사용된다.

        여기서 패키지 관리란? 패키지를 설치하고 업데이트하며 수정과 삭제를 하는 작업이다.

        패키지? : 코드의 배포를 위해서 사용되는 코드의 묶음

### 패키지를 어디에 쓰는 걸까?

- ##### 1. 패키지는 라이브러리와 비슷한 개념이다.
- ##### 2. 라이브러리가 코드의 작성을 위해 사용되는 코드의 묶음이라면, 패키지는 코드의 배포를 위해 사용되는 코드 묶음이다.
- ##### 3. 패키지의 경우에 따라 라이브러리를 포함할 수도 있으며, 일반적으로 라이브러리나 실행 파일을 포함한다.

### 패키지의 3가지 정보를 가지고 있는 코드의 배포 단위

- ##### 1. 컴파일한 소프트웨어의 바이너리 ➡️ 바이너리란 : 디스크와 같은 저장장치에 기록된 프로그램

* ##### 2. 횐경 설정에 관련된 정보
* ##### 3. 의존에 관련된 정보

### 자바스크립트 패키지 매니저

    개발자가 많이 사용하는 자바스크립트 패키지 매니저는 npm과 yarn등이 있다.
    많은 프로젝트에도 수십개에서 수백개의 다른 패키지가 존재한다.

#### ➡️ 패키지 매니저가 필요한 이유는 무엇일까?

대부분의 자바스크립트 패키지 매니저는

- `Node.js` 실행 환경에서 돌아간다.
- `package.json`이라는 파일에 프로젝트가 의존하고 있는 패키지 목록을 명시한다.
- 일반적으로 패키지는 프로젝트의 `node_modules` 디렉토리에 저장된다.

## npm (Node Package Manager)

    1. Node.js의 표준 패키지 매니저
    2. Node.js를 설치하면 무조건 딸려오는 기본 패키지 매니저다.

    장점 : 별도의 설치가 필요없다.

- `npm install` 주소 : 특정 저장소 내 패키지 설치. 주로 github을 이와 같이 설치
- `npm install` package_name -g : 글로벌 설치. 로컬의 다른 프로젝트도 이 패키지 사용 가능
- `npm update` : 설치한 패키지들 업데이트
- `npm dedupe` : 중복 설치된 패키지들 정리해주는 명령어

#### npx (Node Package Runner)

    1. npm에서 제공해주는 하나의 도구
    2. 모듈이 많아 업데이트가 잦은 create-react-app의 경우 npx를 이용해 설치하는 것이 좋다.

## yarn (Yet Another Resource Negotiator)

##### npm의 단점 보완을 위해 Facebook에서 만듬

    1. 별도의 설치가 필요하다.
    2. 공식적으로 더 이상 기능 추가를 하지 않겠다고 발표하였다.

- `yarn add 주소` : 특정 저장소 내 패키지 설치. 주로 github을 이와 같이 설치
- `yarn global add package_name` : 글로벌 설치. 로컬의 다른 프로젝트도 이 패키지 사용 가능
- `yarn upgrade` : 설치한 패키지들 업데이트
- `yarn dedupe` : 중복 설치된 패키지들 정리해주는 명령어

### npm의 단점

- ##### 1. 성능 및 설치 속도(순차적 설치)
- ##### 2. 보안성이 취약

### npm과 yarn의 차이점

#### npm

- ##### 설치 방식 : 순차적 패키지 설치
- ##### 접근성 : 별도 설치 X (접근성이 좋다)
- ##### 버전 잠금 파일 : package-lock.json 파일 자동 생성 및 업데이트
- ##### Output log : 출력 로그가 방대하다

#### yarn

- ##### 설치 방식 : 병렬적 패키지 설치 (속도가 빠르다.)
- ##### 접근성 : 별도 설치 O
- ##### 버전 잠금 파일 : yarn.lock 파일 자동 생성 및 업데이트
- ##### Output log : 비교적 시각적으로 깔끔하게 출력된다

## yarn Berry

    1. Facebook에서 발표한 yarn의 두 번째 버전 (2020)
    2. Plug'n'Play(PnP) 라고 불리는 새로운 패키지 관리 방식

- ##### 무거웠던 `node_modules`를 제거하고 옮긴 덕분에, 의존성까지 github에 올릴 수 있다.
- ##### 각 패키지가 `zip 아카이브`로 압축되어 있으므로, 스토리지 용량을 크게 아낄 수 있다.
- ##### 의존성을 구성하는 파일의 수가 많지 않으므로 변경 사항을 감지하거나 전체 의존성을 삭제하는 작업이 빠르다.

### yarn berry 사용법

- #### 1. yarn 버전 변경

        $ npm install -g yarn
        $ cd ../path/to/some-package
        $ yarn set version berry

- #### 2. `node_modules`와 `package.lock.json` 삭제하기

        $ rm -rf node_modules
        $ rm -rf package.lock.json

- #### 3. `.yarnrc.yml`파일에서 `nodeLinker: node-modules`삭제!
- #### 4. `yarn install`
- #### 5. `.gitigonre 설정`

```github
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

## pnpm (performant npm)

    1. npm 과 yarn 의 비효율을 개선한 노드 패키지 매니저 (2017)
    2. Plug'n'Play(PnP) 지원

#### content-addressable file store

    pnpm 은 홈디렉토리의 글로벌 저장소인 ~/.pnpm-store 에 모든 패키지를 저장하는 저장소를 두고
    중첩된 패키지는 단 한번만 설치한다.

- #### content addressable file store 방식

##### 파일 이름으로 해당 파일을 접근하는 것이 아니라 의존성 파일에 hash id를 부여하고 관리한다.

<img src="https://velog.velcdn.com/images/seobbang/post/a02d95da-c487-4374-87b4-acccbf43d827/image.png"/>

### pnpm 장점

- ##### 1. 불필요한 I/O 과정을 없애 빠르고 효율적이다.
- ##### 2. 패키지 중복 설치를 하지 않음으로써 사용 용량이 적다.
- ##### 3. npm과 사용법이 비슷하다.

### 사용법

#### pnpm 설치

     $ npm i -g pnpm

    명령어
    pnpm install : 전체 설치
    pnpm add <'pkg'> : 패키지 설치
    pnpm <'cmd'> : pnpm start, pnpm dev 등 cmd 명령어 사용
