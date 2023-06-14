# Test Code

## 테스트 코드는 무엇일까?

    테스트 코드는 소프트웨어의 기느오가 동작을 테스트하는데 사용되는 코드이다.
    소프트웨어의 결함을 찾고 수정하는 과정이 매우 중요하다.
    또 테스트 코드는 개발자가 작성한 코드를 실행하고 예상된 결과가 나오는지 확인하는데 사용된다.

## 테스트 코드의 종류

![테스트 코드의 종류](https://media.discordapp.net/attachments/1095533641137918024/1114510622642679818/image.png?width=964&height=650)

#### 1. 단위 테스트 (Unit Testing)

    단위 테스트는 소프트웨어 개발에서 가장 기본적으로 사용하는 테스트 중 하나로, 개별적인 코드 단위
    보통 함수, 메서드가 의도한 대로 잘 작동이 되는지 확인을 하는 과정을 이야기한다.
    소프트웨어의 개별 코드 단위를 테스트하여 오류를 캐치하고 수정하여 전체적으로 소프트웨어의
    품질을 향상시키는 과정이라고 설명을 할 수 있습니다.

    따라서!! 단위 테스트를 작성하여 각각의 코드 단위가 정확한 입출력 값을 반환하는지 확인해야합니다.
    단위 테스트 작성을 위해서 다양한 라이브러리, 프레임워크를 제공하는데 대표적으로 JAVA, Junit이 있다.

```java
public class Calculator{
    public int add(int a, int b){
        return a + b;
    }
}

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {
    @Test
    public void testAdd(){
        Calculator calculator = new Calculator();
        int result = calculator.add(2, 3);
        assertEquals(5, ressult);
    }
}
```

    설명 : Calculator 클래스는 add라는 메서드를 소유. -> 두 정수를 더해서 반환을 한다.
    CalculatorTest 클래스는 Junit의 @Test 어노테이션을 이용하여 testAdd를 선언한다.
    testAdd 메서드는 Calculator 클래스의 add 메서드가 제대로 작동하는 검증을 한다.

Java Annotation : 자바의 어노테이션은 소스코드에 추가해서 사용할 수 있는 메타 데이터

    assertEquals 메서드를 이용하여 testAdd 메서드에서 Calculator 클래스의 add 메서드가
    반환한 값이 예상 값과 같은지 검사를 한다.

### Jest

#### 초기 세팅

    // 설치
    $ npm install jest --save-dev

    // ESLint Testing Plugins 설치
    $  npm install eslint-plugin-testing-library eslint-plugin-jest-dom

    > package.json에 eslintConfig 삭제

```json
{
  "plugins": ["testing-library", "jest-dom"],
  "extends": [
    "react-app",
    "react-app/jest",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
  ]
}
```

#### Jest란

    Jest는 단순함에 초점을 맞춘 자바스크립트 테스트 프레임워크이다.
    Jest는 React 뿐만 아니라 Babel, TypeScript, Vue,Node 등 다양한 곳에서 사용 할 수 있는
    테스트 러너이며 직접적으로 테스트를 실행 해주는 역할을 할 수 있다.

    1. FaceBook에 의해서 만들어진 테스팅 프레임워크이다.
    2. 최소한의 설정으로 동작하며 Test Case 를 만들어서 어플리케이션 코드가 잘 돌아가는지 확인
    3. 단위 (Unit) 테스트를 위해서 이용

##### Jest 파일 구조

    1. describe에 test케이스들이 들어와 있는 구조이다.
    2. describe : 여러 관련 테스트를 그룹화 하는 블록 제작한다.
    3. test, it : 개별 테스트를 수행하는 곳, 각 테스트를 작은 문장처럼 설명

### testing-library-react

    React는 JSX 문법이 사용된 Component라는 개념이다.
    일반 javascript 가 아니기 때문에, 테스트 러너에서 쉽게 동작하기 위해서 필요한
    라이브러리가 testing-library-react이다.

    //설치
    npm install --save-dev @testing-library/react

    @testing-library는 UI 컴포넌트를 사용자 친화적으로 테스트할 수 있게 도와주는 패키지 묶음이다.

#### 2. 통합 테스트 (Integration Testing)

    통합테스트는 서로 다른 모듈들 간의 상호작용을 테스트 하는 과정이다. 예를 들어 새로 개발한 API 서버 내
    DB 호출 함수가 데이터베이스의 데이터를 잘 호출하고 있는지 테스트하고 과정이라고 생각하면 된다.

    통합 테스트는 보통 모듈 간의 인터페이스 테스트, 시스템 레벨 테스트 등의 방법으로 수행이 된다.
    예시로 여러 모듈이 연결된 BE API 웹 애플리케이션의 경우 서로 다른 모듈들 간의 상호작용을
    테스트하기 위해서 각 모듈 단위 테스트를 모두 완료한 뒤, 둘 이상의 모듈을 거쳐 동작을 API
    테스트 시나리오를 기반으로 통합 테스트를 수행한다.

![통합 테스트](https://media.discordapp.net/attachments/1095533641137918024/1114515946577596478/image.png?width=756&height=650)

##### 단위보다 통합이 더 많인 리소스와 시간이 필요하며, 오류를 발견하고 수정하는데 많은 시간이 필요하다.

##### 하지만 통합 테스트를 수행함으로써, 전체적인 소프트웨어 시스템의 신뢰성과 안정성을 높일 수 있다는 것!

<br>

## 테스트 코드를 왜 사용해야 할까?

    테스트 코드를 사용하면 다양한 상황에서 얻는 결함을 보다 쉽게 찾을 수 있고 개발을 하면서
    더 좋은 코드로 개선을 할 수 있기 때문입니다.

- ##### 무엇을 만들고 있는지 인지 : 테스트 코드 작성을 통해 요구사항의 기능적인 항목을 정리, <br>코너 케이스를 찾으며 이는 문서의 역할을 한다.
- ##### 리팩토링 진행할 때 부담 덜기 : 테스트 코드가 있으면 코드 수정 후에도 기능이 정상적으로 작동하는지<br>검증 할 수 있어, 개발자는 불안감에서 벗어날 수 있다.
- ##### 결합도와 의존성이 낮은 코드 지향 : 테스트 코드 작성을 통하여 의존성이 높은 부분을 개선하면 프로젝트의<br>코드 품질을 향상시키고 개발자로서의 경험이 쌓임.

<br>

## 테스트 코드의 장단점

### 장점

- #### 1. 코드의 품질을 향상 ➡️ 소프트웨어의 품질을 향상

- #### 2. 회귀 테스트 ➡️ 결함과 버그를 빠르게 발견하고 수정

- #### 3. 문서화 ➡️ 커뮤니케이션 향상에도 도움을 줌

- #### 4. 리팩토링 지원 ➡️ 리팩토링 후에 기능이 정상적으로 작동하는 확인

### 단점

- #### 1. 개발 시간 증가 ➡️ 개발 시간이 증가, 초기 개발 비용 증가

- #### 2. 불완전한 테스트 ➡️ 버그가 테스트 통과하게 되어, 완전한 테스트 어려움

- #### 3. 오버 엔지니어링 ➡️ 개발 속도 저하와 비효율적인 리소스 사용

- #### 4. 유지 보수 비용 ➡️ 추가적인 유지 보수 비용이 발생

- #### 5. 학습 곡선 ➡️ 테스트 프레임워크와 작성 방법을 익히는 시간 발생

<br>

### 테스트 코드 프레임워크

- #### 1) Junit - JAVA
- #### 2) DBunit - DB
- #### 3) CppUnit - C++
- #### 4) Nunit - .net

## 마치며

<br>

![테스트 코드의 작성](https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/04/TDD-%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8C%E1%85%AE%E1%84%80%E1%85%B5.png?resize=1024%2C680&ssl=1)

    테스트 코드를 사용하는데 나는 장점보다는 단점이 더 많다고 생각이 드는 것 같다..
    물론 장기적으로 보면 좋을 수도 있지만 지금 내 상황에서는 쓰는 것이 맞나? 라고 생각이 들 수도
    있을 것 같다. 하지만 더 좋은 개발자가 되기 위해서 좋은 기회와 습관을 제공한다는 것이다.
    더 좋은 프로젝트의 진행과 품질 결과를 위해서 한번 써보는 것이 좋을 것 같다!!
