# Frorong의 코드 리뷰 회고!

깃허브 계정을 만든 지 1년이 되었다.  
그동안 잔디도 예쁘게 채웠고 깃허브를 유용하게 사용하였다.

깃허브에는 여러 기능들이 있지만 그중 꽃은 **PR**과 **코드 리뷰**가 아닐까 생각된다.

## **Pull Request**

Pull Request(PR)는 코드 리뷰와 협업을 위한 기능이다. 주로 팀 내의 협업 환경에서 사용된다.

PR의 일반적인 flow는 다음과 같다.

1.  자신의 로컬에서 작업을 진행하여 변경사항을 만든다.
2.  변경 사항을 원격 저장소에 push한다.
3.  push 된 변경사항을 기반으로 PR을 생성한다.
4.  PR에 대한 코드 리뷰가 이루어진다.
5.  변경사항이 승인되면 merge 된다.

## **Code Review**

코드 리뷰는 소프트웨어 개발 과정에서 다른 개발자 혹은 팀원들과 작성한 코드를 검토, 분석하고 개선하는 활동을 의미한다. 코드 리뷰는 주로 버그, 보안 취약점, 성능 문제, 가독성, 유지 보수 가능성 등을 확인하고 개선하기 위해 수행된다.

#### **Code Review**의 장점!!

코드 리뷰를 통해 기본적으로 코드의 품질이 개선된다. 또한 오류가 줄어들며 전체적인 코드 베이스의 일관성을 유지시킬 수 있다. 또한 리뷰어가 다른 사람의 코드를 분석함으로써 팀 전체적으로 기술 수준의 상승과 최적화된 코드 작성 방법을 습득할 수 있다.

이것이 코드 리뷰가 많은 비용이 드는데에도 코드 리뷰를 하는 이유이다.

## 나의 **Code Review**

#### 첫 **Code Review**

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbykf6o%2FbtsitZ4kONO%2FoX4xJhjKWEnM12idj7UN70%2Fimg.png">

내가 처음으로 날렸던 코드 리뷰이다.

한 PR에서 생긴 변경사항이 무지 많았고 코드를 쓰윽 읽어본 후 코멘트를 남겼었다. 지금 다시 리뷰한다면 100개씩 코멘트를 달 것 같은 코드이지만 말이다. 이 PR은 Approve조차 없이 merge 되었다.

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb2hpc4%2FbtsiBLRdFse%2F6eXHT4LSLUivfCd2IDNfP1%2Fimg.png">

물론 PR 컨벤션 따윈 없었고 작업 내용도 엉망으로 작성하였다. PR부터 제대로 작성되지 않았는데 코드 리뷰가 정상적으로 이루어질 리 없다.

#### 두 달 후의 **Code Review**

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZYGUd%2FbtsiBKrfMNX%2F8YUnEtM8q8HvrXqSzoielk%2Fimg.png">

두 달 후 **Ajax**를 배운 후 처음으로 서버와 통신하며 프로젝트를 진행했다. 첫 코멘트였던 great보다는 발전했지만 그래도 많이 아쉽다. 어떤 오류가 있는지, 어떤 방향으로 수정해야 하는지 이야기를 해줬다면 좋았을 것이다.

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc3eG0y%2FbtsivgYMpVU%2FNajWQOZPrmCWaKs613jM1K%2Fimg.png">

Approve라는 게 생겼다. 하지만 빠르게 merge 하고 다음 작업을 하기 위해 코드를 정확히 파악하지 않고 형식적으로 approve 하였다. 분명 개선이 필요한 코드가 존재했다.

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbgUJ3W%2FbtsiFCfn97e%2FREw6urudrmNYR36KEM54WK%2Fimg.png">

PR 템플릿이 추가되었다. 개요, 작업내용, issue로 구성되었지만 issue 항목은 전혀 사용되지 않았다. 개요 항목과 작업내용 항목이 거의 일치한다. 작업 내용을 좀 더 상세히 서술하여 채웠었다면 리뷰어들이 리뷰하기보다 편했을 것이다.

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWFkHY%2FbtsitHbON9B%2F4DKkbnkBsNKAeOVak2Jke1%2Fimg.png">

좀 더 시간이 흐른 후 다음 프로젝트의 PR이다. 여전히 불친절하다.

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcOCanC%2FbtsisQNRxNO%2FdIPj90LwxTHsMLL1fyFqWK%2Fimg.png">

리뷰 코멘트는 좀 더 나아진 모습을 보여준다. 개선이 필요한 코드를 확실히 짚어주고 개선이 필요한 이유와 개선 방법을 제안하였다.

\`\`\`suggestion기능도 사용되었다.

#### 최근의 **Code Review**

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbZKKvC%2FbtsivQyMPOg%2F9ETr0oVNwsQ6Ir0cAmWspk%2Fimg.png">

리뷰어들이 조금 더 편하게 리뷰할 수 있도록 보다 신경을 써서 PR을 작성하였다. 제작된 컴포넌트와 해당하는 Props를 명시해두었다.

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbcK0bD%2FbtsiyVzN9S8%2Fo1fYtoVC146eDJVSTH2sV0%2Fimg.png">

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbS10Ul%2Fbtsiu2lWTvZ%2F5AsZNaD2wPxkItmKGvNMR0%2Fimg.png">

처음의 코드 리뷰와 비교하면 확연히 개선되었다고 생각한다. 하지만 아직 선배님들이나 팀원들의 코드에 코멘트를 달기에는 어려움이 많다. 어느 부분에 개선이 필요한지 파악하기도 쉽지 않고 사실 코드 자체를 이해하는데도 시간이 꽤 소요된다. 코멘트 자체를 어떻게 적어야 할지도 잘 모르겠다. 그럼 어떻게 보다 나은 코드 리뷰를 할 수 있을까??

## 보다 나은 **Code Review**를 위한 방법??

카카오에서 제안하는 리뷰의 5가지 규칙이 있다.

1.  **개선이 필요한 이유를 충분히 설명해 준다.**
    - 코드 리뷰가 주관적이거나 추상적이라면 리뷰이가 혼란을 느낄 수 있다. 때문에 리뷰이가 개선의 필요를 느낄 수 있도록 충분히 구체적인 이유를 작성해 준다.
2.  **답을 알려주기보다는 스스로 고민하고 개선 방법을 선택할 수 있도록 한다.**
    - \~~~ 변경하세요 와 같은 리뷰는 리뷰의 코드만 변경될 뿐 스스로 생각하는 시간이 줄어든다. 답을 알려주는 리뷰가 많아질수록 코드에 대한 애정이 떨어지고 수동적인 개발자가 될 수 있다.
3.  **코드를 클린하고 일관되도록 유지하게 안내한다.**
    - 코드 가독성을 높이고 일의 생산성을 향상하기 위해 코드 리뷰를 할 때에도 코드를 깨끗하게 유지한다. 일관된 코드인지 확인하기 위해서는 코드 전체를 보아야 한다.
4.  **숙제검사가 아닌 학습 과정으로서의 리뷰가 되게 한다.**
    - 리뷰이가 코드 리뷰를 학습 과정으로 받아들일 수 있도록 피드백을 자주 주고받으며 성장하고 있다는 믿음을 심어준다.
5.  **리뷰를 위한 리뷰를 하지 마라.**
    - 리뷰할 부분이 없는데 흔적을 위해 리뷰할 경우 서로 어색해질 수 있다. 리뷰할 부분이 없다면 칭찬 피드백을 해주는 것도 하나의 방법이다. 깔끔한 코드를 보고 칭찬한다면 서로 시너지 효과를 증대시킬 수 있다.

나는 카카오에서 제안한 규칙에 적극 동의한다.

추가로 효과적인 코멘트를 다려면 리뷰할 코드의 목적과 의도를 이해해야 한다. 코드의 목적과 의도를 쉽게 이해하기 위해서는 깔끔하게 작성된 PR이 있다면 좋을 것이다.

## Pull Request 작성 방법

1.  PR에 **목적을 한 문장으로 요약**한다.
2.  **작업에 대한 이유**를 포함한다.
    - 리뷰어가 이전 코드에 익숙하다고 가정해서는 안된다.
3.  원하는 피드백이 있을 경우 **피드백의 방향과 내용을 명시**한다.
4.  요청한 PR이 **작업 중이라면 이를 명시**한다.

## **Code Review**시 확인하면 좋은것! (프론트 시점)

1.  **컴포넌트가 독립적으로 분리되어있는지 확인한다.**
    - 컴포넌트가 독립적으로 분리되어 있다면, **해당 컴포넌트를 다른 부분에서 재사용**할 수 있다. 이는 개발 시간을 단축시키고 일관성 있는 사용자 인터페이스를 구축하는 데 도움이 된다.
    - 독립적인 컴포넌트는 다른 부분에 영향을 미치지 않고 개별적으로 수정하고 업데이트할 수 있다.
    - **단위 테스트시에도 용이**하다. 개별 컴포넌트의 동작을 테스트하기 쉽다.
    - **코드의 가독성이 향상**된다. 다른 개발자들이 해당 컴포넌트를 쉽게 이해하고 사용할 수 있으며, 코드의 의도를 파악하기 쉽다.
2.  **함수의 이름으로 동작을 유추 가능한지 확인한다.**
    - 함수의 이름이 동작을 명확하게 나타내면 **코드의 가독성이 향상**된다. 다른 개발자나 팀원들이 해당 함수를 호출할 때 함수의 이름만 보고도 어떤 동작이 수행되는지 쉽게 이해할 수 있다. 함수의 동작을 파악하기 위해 함수 내부의 세부 구현을 자세히 살펴볼 필요 없이 함수 이름만으로도 어떤 일이 일어나는지 유추할 수 있다.
    - 코드를 수정해야 할 때 해당 함수를 찾아 수정하기가 더욱 쉬워진다. 함수의 역할을 파악하는 데 소요되는 시간이 줄어들고 수정해야 할 부분을 정확히 식별할 수 있다.
3.  **컴포넌트에 상하좌우 여백이 있는지 확인한다.**
    - 컴포넌트 밖에 여백이 있다면 **컴포넌트의 재사용성이 떨어진다**. 다른 개발자나 팀원들이 컴포넌트를 사용할 때에 여백을 수정 해야할 경우가 생길 수 있다.

## 마치며

지금까지 나의 코드 리뷰는 아쉬운 부분이 많았다. 앞으로 개선해나갈 것이고 코드 리뷰를 통해 코드의 품질 또한 개선될 것이다. 프로젝트를 진행하면서 코드 리뷰로 많은 것을 얻고 배울 수 있어 좋다.

## References

[완벽한 풀 리퀘스트를 작성하는 방법 - GitHub](https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/)

[효과적인 코드리뷰를 위한 리뷰어의 자세](https://tech.kakao.com/2022/03/17/2022-newkrew-onboarding-codereview/)
