# Suspense란 무엇일까❓

#### 아직 렌더링이 준비되지 않은 컴포넌트가 있을때 로딩 화면을 보여주고 로딩이 완료되면 해당 컴포넌트를 <br/>보여주는 React에 내장되어 있는 기능이다.

```jsx
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```

### Suspense

#### Props

- ##### 1. `children`: 렌더링하려는 실제 UI이다. 렌더링을 하는 동안 일시 중단이 되면 `children suspense` 경계가 렌더링으로 전환됨

* ##### 2. `fallback`: Load가 완료가 되지 않은 실제 UI 대신 렌더링할 대체 UI이다. `children`렌더링하는 동안 중단이 되면 <br/>`fallback`가장 가까운 사위 Suspense 경계를 활성화 하게 된다.

## 용법

### 콘텐츠가 로드되는 동안 대체 표시

Suspense 경계로 애플리케이션의 모든 부분을 래핑할 수 있다.

```jsx
<Suspense fallback={<Loading />}>
  <Albums />
</Suspense>
```

### 내용을 한 번에 공개

기본적으로 Suspense 내부의 전체 트리는 단일 처리로 처리를 하게 된다. 예를 들어서, 이러한 구성 요소 중 하나만 일부 데이터를
일시 중단 하더라도 모두 함께 로드 표시기로 대체가 된다.

```jsx
<Suspense fallback={<Loading />}>
  <Biography />
  <Panel>
    <Albums />
  </Panel>
</Suspense>
```

### load될 때 중첩된 콘텐츠를 표시

구성 요소가 일시 중단이 되면 가장 가까운 Suspense 구성 요소가 fallback을 표시하게 된다. 이를 통하여 여러 Suspense 구성 요소를 중첩하여
로딩 시퀀스를 생성할 수 있다. 다음 수준의 콘텐츠를 사용할 수 있게 된다면, Suspense 경계의 fallback 채워진다.

#### 예를 들어 앨범 목록에 자체 폴백을 지정할 수 있다!!

```jsx
<Suspense fallback={<BigSpinner />}>
  <Biography />
  <Suspense fallback={<AlbumsGlimmer />}>
    <Panel>
      <Albums />
    </Panel>
  </Suspense>
</Suspense>

//이 변경으로 인해 가 로드될 Biography때까지 "대기"할 필요가 없다. Albums.
```

### 순서는 아래와 같다.

- #### 1. `Biography`아직 로드되지 않은 경우 BigSpinner전체 콘텐츠 영역 대신 이 표시가 된다.

* #### 2. `Biography`로드가 완료가 되면 `BigSpinner`내용으로 대체가 된다.

- #### 3. `Albums`아직 로드되지 않은 경우 및 해당 부모 대신 `AlbumsGlimmer`가 표시가 된다.

* #### 4. `Albums`로드가 완료되면 `AlbumsGlimmer`가 된다.

### 세로운 내용이 load되는 동안 오래된 내용을 표시

`SearchResults`구성 요소는 검색 결과를 가져오는 동안 일시 중단이 된다. 입력 `a`하고 결과를 기다린 다음으로 편집한다. `ab`에 대한 결과는 `a`로딩 폴백이 된다.

```js
import { Suspense, useState } from "react";
import SearchResults from "./SearchResults.js";

export default function App() {
  const [query, setQuery] = useState("");
  return (
    <>
      <label>
        Search albums:
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults query={query} />
      </Suspense>
    </>
  );
}
```

### 입력

<img src="https://cdn.discordapp.com/attachments/956190154454876183/1138717131328983070/image.png"/>

    일반적인 대체 UI 패턴은 목록 업데이트를 연기 하고 새 결과가 준비될 때까지 이전 결과를 계속 표시를 하고,
    후크 useDeferredValue를 사용하면 지연된 버전의 쿼리를 아래로 전달할 수 있다.

```js
export default function App() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  return (
    <>
      <label>
        Search albums:
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults query={deferredQuery} />
      </Suspense>
    </>
  );
}

//query즉시 업데이트되므로 입력에 새 값이 표시된다.
//deferredQuery데이터가 로드될 때까지 이전 값을 유지하므로 SearchResults잠시 동안 오래된 결과가 표시가 된다.
```

### User에게 더 명확하게 표시를 하기 위해 오래된 결과 목록이 표시될 때 시각적 표시를 추가할 수 있다.

```jsx
<div
  style={{
    opacity: query !== deferredQuery ? 0.5 : 1,
  }}
>
  <SearchResults query={deferredQuery} />
</div>
```

### 이미 공개된 내용을 숨겨지는 것을 방지

구성 요소가 일시 중단이 되면 가장 가까운 상위 Suspense 경계가 fallbac을 표시하도록 전환이 된다. 이로 인하여 이미 일부의 내용을
표시하고 있는 경우에는 사용자의 경험이 왜곡될 수 있다.

[공식 문서 (Preventing already revealed content from hiding)](https://react.dev/reference/react/Suspense#preventing-already-revealed-content-from-hiding)

### 마치며

<img src="https://velog.velcdn.com/images/seeh_h/post/eabee579-2bff-484c-8380-2e5d36cc12fa/image.png"/>

    처음에는 완전 처음 들어본 내용이어서 되게 낯설게 느껴졌다. 하지만 처음 개념을 접하게 되었을 때 아직 렌더링이 되지 않은 컴포넌트가
    있을 경우에는 로딩 화면을 보여주고 완료가 된다면 해당 컴포넌트를 다시 보여준다. 라는 이 문구에서 되게 크게 관심도가 생긴 것 같았다.
    다른 문서도 확인을 해보면서 React.lazy와 함께 사용을 한다고 하는데 더 자세한 것을 tistory를 통해서 정리하면서 더 조사해 볼 것이다.
