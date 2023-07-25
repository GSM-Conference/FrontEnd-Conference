### 배경

항상 프로젝트를 진행하기 전에는 팀 내에서 **코드 컨벤션**을 설정합니다.
파일명과 폴더명은 대문자로 할지, 변수명은 카멜케이스로 할지.. 하지만 이런 컨벤션을 정해도 막상 마무리된 프로젝트의 결과는 중구난방으로 파일구조부터 코드 스타일 등 통일화된 부분이 많이 없습니다.

그 이유는 **명확한 컴포넌트 설계 기준**이 없기 때문입니다. 팀원들은 각자가 생각하는 기준으로 컴포넌트를 나눕니다. 아래 예시 이미지와 같이 컴포넌트를 다르게 구성할 수 있습니다.

![출처 - [카카오](https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/)](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e993e1b4-8e5a-4915-88c3-fa7b6cfca490/Untitled.png)

출처 - [카카오](https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/)

그렇기 때문에 여러 디자인 패턴이 나오게 되었고, 그 중 아토믹 디자인 패턴에 대해 조사해보았습니다!

# Atomic Design Pattern

아토믹 디자인 패턴 구성요소는 크게 5가지로 구성되어 있습니다.

일단 아토믹 디자인 패턴의 배경은 다음과 같습니다. 모든 것은 원자(atom)로 구성되어있고, 원자들이 서로 결합하여 분자(molecule)가 되고, 분자는 더 복잡한 유기체(organism)로 결합하여 궁극적으로 모든 물질을 생성한다는 것에서 시작합니다.

원자(atom) → 분자(molecules) → 유기체(organisms) → 물질(templates) → 최종(pages)

![출처 - https://atomicdesign.bradfrost.com/chapter-2/#the-part-and-the-whole](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8f398fe8-d33e-45d9-bc99-424ab1610072/Untitled.png)

출처 - https://atomicdesign.bradfrost.com/chapter-2/#the-part-and-the-whole

## 1. Atom

**atom은 더이상 분해할 수 없는 기본 컴포넌트**입니다.

label, input, button과 같이 기본 HTML element 태그 혹은 글꼴, 애니메이션, 컬러 팔레트, 레이아웃과 같이 추상적인 요소도 포함될 수 있습니다. atom은 모든 기본 스타일을 한눈에 보여주므로 디자인 시스템을 개발할 때 유용하게 사용됩니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cc7b5df5-7f71-4387-a424-fc31b17f31df/Untitled.png)

## 2. Molecule

molecule은 여러 개의 **atom을 결합**하여 자신의 고유한 특성을 가집니다.

아래 이미지는 input, label, button atom들이 결헙한 것입니다. button을 클릭하여 form을 전송하는 것은 molecule 에서 이루어지는 것이죠.

**molecule의 중요한 점은 한 가지 일을 하는 것입니다.**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/04b18c5c-1639-488f-9814-2f8b64f380d4/Untitled.png)

## 3. \***\*Organism\*\***

organism은 molecule보다 좀 더 복잡하고 서비스에서 표현될 수 있는 명확한 영역을 가집니다.

아래와 같이 logo(atom), navigation(molecule), search form(molecule)을 포함할 수 있습니다. atom, molecule에 비해 좀 더 구체적으로 표현하기 때문에 상대적으로 재사용성이 낮아지는 특성을 가집니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/10afee48-e1bd-4c33-9e2e-9fa00a632288/Untitled.png)

## 4. \***\*Template\*\***

템플릿은 page를 만들 수 있도록 여러 개의 organism, molecule로 구성할 수 있습니다. 아래 이미지와 같이 실제 컴포넌트를 레이아웃에 배치하고 구조를 잡는 와이어 프레임입니다. 즉, 실제 콘텐츠가 없는 page 수준의 단계라고 정의할 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e2ef1640-51bd-42e7-a219-6194261da338/Untitled.png)

## 5. \***\*Page\*\***

page는 유저가 볼 수 있는 실제 콘텐츠를 담고 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/85117d61-c07a-4bff-ba4c-1584862164e4/Untitled.png)

# 실제 프로젝트에 도입 해보자 ! !

기업 과제때 수행했던 페이스북 게시판 프로젝트에 아토믹 디자인 패턴을 적용시키겠습니다.

![스크린샷 2023-07-13 오후 5.48.04.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd6e87ba-ffe7-49c0-a1f9-6694bbc40e17/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-13_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.48.04.png)

## 폴더 구조

아토믹 패턴을 사용한다면 폴더 구조는 2가지 방법이 있습니다.

![출처 - https://yozm.wishket.com/magazine/detail/1531/](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d69f9c00-ea27-4fe1-853a-4946d912f1b0/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-13_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.36.43.png)

출처 - https://yozm.wishket.com/magazine/detail/1531/

1. 특정 atom을 찾기 편하다.
2. 하나의 컴포넌트에서 이루어진 요소들을 한눈에 확인할 수 있다.

두 의견 다 좋아보이지만, 추후에 컴포넌트들이 많아진다면 1안에서는 atom 폴더 안에 무수히 많은 요소들이 포함되어 있을 것입니다. 그렇게 한다면 특정 요소를 찾기 불편할 것 같기 때문에 2번을 선택했습니다.

## 1. Header

![스크린샷 2023-07-13 오후 8.18.40.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cc568115-d587-41f6-acdd-c5a516c57777/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-13_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.18.40.png)

Header는 로고 이미지와 프로필 이미지로 이루어져 있습니다. 이미지를 atom, 전체 요소는 molecules로 구성해보겠습니다.

![스크린샷 2023-07-13 오후 8.07.37.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b9122775-54ee-41e7-a4c7-ef9f6ded8e73/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-13_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.07.37.png)

폴더구조는 다음과 같이 생성하였습니다.

해당 코드는 atom들을 모은 molecules 코드입니다.

![Header/molecules/index.ts](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/89b4ba66-4fb2-4095-b6bd-3203711a1c89/code.png)

Header/molecules/index.ts

## 2. Post

게시글은 크게

1. 내용
2. 좋아요 & 댓글달기 버튼
3. 댓글

로 이루어져 있습니다. 각각 molecules으로, 전체 요소를 organism으로 구성하겠습니다.

![스크린샷 2023-07-13 오후 8.57.04.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d33aa12e-f0ae-467e-93a9-02a9ed0bdb1c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-13_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.57.04.png)

### 2-1. 내용 (Content)

![스크린샷 2023-07-20 오전 8.51.11.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8f9db444-c2b4-4668-a18e-c0aab67290e5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-20_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_8.51.11.png)

내용은 크게 작성자 프로필, 내용, 이미지로 나눌 수 있습니다.

- 작성자 프로필 (Profile)

  프로필은 크게 사용자 이미지, 이름, 작성 날짜로 이루어져 있습니다. 해당 요소를 atoms로 구성하고 해당 atoms를 모은 molecules로 구성했습니다.

  ![Content/molecules/Profile.tsx](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dff7716d-1548-45c4-bece-51eecdea4514/code.png)

  Content/molecules/Profile.tsx

- 게시글 내용 (Detail)
  ![Content/atoms/Detail.tsx](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9a61225e-95c4-4323-9f68-22ab96dfbab3/code.png)
  Content/atoms/Detail.tsx
- 사진 (ContentImage)
  ![Content/atoms/ContentImage.tsx](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/90f1f8d4-2146-4c2c-b583-4abbdcb7f98c/code.png)
  Content/atoms/ContentImage.tsx
  아래와 같은 폴더 구조로 구성되었습니다.
  ![스크린샷 2023-07-20 오전 9.27.36.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/78fcec3f-94a2-4c7c-afee-96b62e82c308/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-20_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_9.27.36.png)

### 2-2. 좋아요 & 댓글달기 버튼 (SocialMediaButton)

![스크린샷 2023-07-20 오전 10.02.13.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ff11a077-1923-46dc-bb4a-a84b86cbea05/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-20_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_10.02.13.png)

좋아요와 댓글달기 버튼을 atoms로 나누었습니다. molecules에서 onClick 로직을 작성하고 props으로 넘기게 구성하였습니다.

![SocialMediaButton/molecules/index.tsx](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/415fdebd-1ca7-40f6-ad98-a2c7b5a7c6ea/code.png)

SocialMediaButton/molecules/index.tsx

### 2-3. 댓글

댓글은 textarea, icon, 답글로 이루어져 있습니다.

![스크린샷 2023-07-20 오전 10.13.16.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4103988c-d06c-42c9-a4b5-9e5057b28ac1/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-20_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_10.13.16.png)

Comment라는 atoms과 Reply라는 atoms로 구분하였습니다.

댓글 데이터를 가져오기 때문에 각 요소를 모은 후 templates에서 데이터를 불러오게 하였습니다.

![Comment/templates/index.tsx](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2dc27671-197e-40c9-ba5e-f06e9c4191d7/code.png)

Comment/templates/index.tsx

## 3. Textarea

이미지와 인풋을 atoms로, 전체 요소는 molecules로 구성해보겠습니다.

![스크린샷 2023-07-13 오후 8.18.56.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/db6a1d79-995f-45c1-8f21-3408adc7ff34/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-13_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.18.56.png)

하지만 여기서 문제가 생겼습니다. 헤더에서 사용한 프로필 UserIcon 컴포넌트가 textarea에서도 사용해야하는 것이죠. 그래서 따로 UserIcon atoms를 제작했습니다.

![스크린샷 2023-07-13 오후 8.44.45.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c5a76a4c-a128-487d-a7b2-e1780450e843/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-13_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8.44.45.png)

한 컴포넌트를 만드는데 이렇게 까지 파일과 폴더를 생성해야 할까 라는 생각이 들었습니다.

---

## 장점

1. 폴더구조를 통일화 하여 깔끔한 구조를 유지할 수 있었습니다.
2. 컴포넌트가 분리되어 있어 유지보수를 편리하게 할 수 있었습니다.
3. 컴포넌트 분리를 atom 단위로 하다보니 재사용성을 높일 수 있었습니다.

![Atomic Design Pattern 적용 전](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/82c07b79-25b6-4b1d-b720-9e4ee511d15b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-24_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_9.44.56.png)

Atomic Design Pattern 적용 전

![Atomic Design Pattern 적용 후](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a37afbfe-b0bf-471a-aa5c-b9d5172fef19/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-24_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_9.45.29.png)

Atomic Design Pattern 적용 후

기존 Header, Textarea, Post로만 분리되었던 컴포넌트를 atomic design pattern을 적용하여 여러 컴포넌트로 분리하였습니다.

## 단점

1. 파일을 여러개로 나누다 보니 props drilling이 일어났습니다.
2. 하나의 컴포넌트를 만들때도 여러 파일을 생성해줘야 하는 번거로운 일이 발생했습니다.

# 마무리

### 느낀점

그래도 디자인 패턴을 정하고 프로젝트 구조를 잡아가니 조금 더 깔끔하고 명확하게 구조를 잡을 수 있어서 편했습니다. 아토믹 디자인 패턴은 혼자 개발할 때보다 다수의 팀원끼리 협업할 때 더욱 더 가치를 발휘할 것 같다고 느꼈습니다.

추후에 프로젝트를 개발할 때 아토믹 디자인으로 개발하여 더욱 더 깊게 공부하고 싶습니다!!

### References

[아토믹 디자인을 활용한 디자인 시스템 도입기 | 카카오엔터테인먼트 FE 기술블로그](https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/)

[React Design Pattern 🎨](https://velog.io/@holim0/React-Design-Pattern#2-atomic-design-pattern)

[Atomic Design Methodology | Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/chapter-2/#the-part-and-the-whole)

[Atomic Design Pattern의 Best Practice 여정기 | 요즘IT](https://yozm.wishket.com/magazine/detail/1531/)
