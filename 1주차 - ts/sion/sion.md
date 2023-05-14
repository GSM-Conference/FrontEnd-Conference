# 자바스크립트의 문제

자바스크립트는 굉장히 **유연한 언어**입니다.
하지만 그만큼 상식적으로 이해되지 않는 동작들도 발생하며, 유연성을 위해 많은 것을 허용하였지만, 그로 인한 부작용도 많이 가지고 있는 언어입니다.

1. NaN을 검사하는 방법

   NaN은 "Not a Number"의 약어로, 숫자가 아님을 나타내는 값입니다. 자바스크립트에서는 이를 검사하기 위해 다음과 같은 코드를 사용할 수 있습니다.

   ```jsx
   if (NaN === NaN) {
     console.log("This will never be printed!");
   }
   ```

   하지만, NaN은 자기 자신과도 일치하지 않기 때문에, 위의 코드는 절대로 실행되지 않습니다.

2. 문자열 연산

   JavaScript는 놀랍게도 다양한 방식으로 연산을 수행할 수 있습니다.

   ```jsx
   const result = "2" + 2; // "22"
   const result = "hello" - "world"; // NaN
   ```

3. == 연산자

   자바스크립트에서 "==" 연산자는 값의 타입을 비교하지 않습니다.
   따라서 예상치 못한 동작이 발생할 수 있습니다. 예를 들어, 다음과 같은 코드는 true를 반환합니다.

   ```jsx
   console.log(5 == "5"); // true
   ```

이러한 문제가 있지만 저희는 자바스크립트를 사용해야 합니다. 웹 시장이 발전하면서 많은 개발자들이 자바스크립트에 익숙해졌고, 그에 따라 자연스레 다른 시장에서도 자바스크립트를 활용하고자 하는 수요가 생겼습니다.

ECMAScript는 주기별로 새로운 문법을 계속해서 발표하며 자바스크립트의 기능도 지속적으로 추가되고 있지만 애초에 최초의 근본적인 설계 자체가 작은 애플리케이션을 빠르게 개발하기 위해서 만들어졌기에 유연하다는 특성과 그로 인해 발생하는 부작용들은 가져갈 수 밖에 없는 한계가 있었습니다.

이러한 자바스크립트 유연한 특성때문에 타입스크립트가 탄생하게 됩니다.

# TypeScript 소개

> 타입스크립트란 유형에 대한 구문이 있는 자바스크립트 입니다.

자바스크립트를 기반으로 하는 강력한 유형의 프로그래밍 언어로 모든 규모에서 더 나은 도구를 제공합니다.

>

**JavaScript and More**

- JavaScript의 추가 구문
- IDE와 통합
  - 자바스크립트는
    실행했을 때 에러 파악
  - 타입스크립트는 에디터
    에서 오류 캐치

**A Result You can Trust**

- JavaScript로 변환
- JavaScript가 지원되는 모든 곳에서 실행 (브라우저, Node.js, Deno 등)

**\*\*\*\***Safety at Scale**\*\*\*\***

- JavaScript를 이해하는
  타입 추론을 사용
- 추가코드 없이 훌륭한 도구 제공

# TypeScript 장점

## 1. 안정성

### [1-1. 컴파일 VS 런타임](https://dd-corp.tistory.com/9)

******\*\*******컴파일******\*\*******

- 소스 코드를 기계어로 번역하는 과정
- 컴파일러에 따라 오류 검사가 강력하며, 번역한 코드의 성능을 최적화할 수 있음

******\*\*******런타임******\*\*******

- 프로그램을 실행하는 과정
- 컴파일 과정 이후에 파일을 실행
- 컴파일 과정 이후에 실행 파일을 실행하여 실행되며, 실행 중에 발생한 오류를 처리함

### [1-2. 정적 타입 VS 동적 타입](https://itmining.tistory.com/65)

********\*\*\*\*********정적 타입 언어********\*\*\*\*********

- 타입스크립트
- 변수의 타입이 컴파일 시간에 결정함
  - 개발자가 타입을 명시적으로 선언해야함
  ![스크린샷 2023-05-04 오전 9.32.02.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9ea0a875-a0a1-4584-8438-adbd0f7cdf27/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-04_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_9.32.02.png)

********\*\*\*\*********동적 타입 언어********\*\*\*\*********

- 자바스크립트
- 변수의 타입이 실행 시간에 결정됨
- 변수의 값에 따라 자동으로 타입이 변할 수도 있음
- 실행 시간에 타입 에러가 발생할 가능성이 있어 디버깅이 어려움
  ![스크린샷 2023-05-04 오전 9.41.38.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4ee7c5a8-f9dc-4048-bccc-8d89f3579888/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-04_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_9.41.38.png)
  ![스크린샷 2023-05-04 오전 10.16.26.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/33097975-89fd-4a9d-88a4-d1fcd061e648/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-04_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_10.16.26.png)

타입스크립트는 컴파일 언어이자 정적 타입 언어로 엄격한 타입 규칙이 있어 안정성이 높습니다. 프로그래밍 언어는 제약이 많으면 많을수록 개발자가 실수하거나, 권장되지 않은 방식으로 코드를 작성할 확률을 줄일 수 있어 안정성을 높일 수 있습니다.

## 2. 표현력

타입스크립트는 “타입”이라는 추가적인 개념을 통해서 자바스크립트로는 할 수 없는 다양한 표현을 할 수 있습니다.

```jsx
function sum(x: number, y: number): number {
  return x + y;
}
```

sum이라는 함수는 x, y라는 인자를 받으며 두 인자는 모두 number 타입입니다. 그리고 number 타입의 값을 리턴합니다. 이러한 정보를 타입을 통해서 알 수 있습니다. 사실 이제 이 함수의 구현은 어떻게 이루어졌는지 전혀 신경쓸 필요가 없습니다. 개발자는 함수의 이름, input의 타입, output의 타입을 통해서 이 함수가 어떤 동작을 하는지 유추하고 파악할 수 있습니다.

## 그때는 몰랐던 타입스크립트 개념

1. Generic

   타입을 매개변수 형식으로 넘겨주는 방식

   ```jsx
   function logAndReturn(a: any): any {
     console.log(a);
     return a;
   }
   ```

   ```jsx
   function logAndReturn<T>(a: T): T {
     console.log(a);
     return a;
   }

   logAndReturn < string > "a";
   ```

2. as const

   Object나 Array 내부의 프로퍼티들의 값을 literal처럼 정확히 지정할 때 사용

   - as const 적용 X
     ```jsx
     const theme = {
       color: {
         gray: ["#F1F1F5", "#E3E3E3", "#999999", "#191919"],
       },
     };
     ```
     ![스크린샷 2023-05-04 오전 9.58.52.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f70dfe76-1c00-4e0c-af2b-e731ec40d034/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-04_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_9.58.52.png)
   - as const 적용 O
     ```jsx
     const theme = {
       color: {
         gray: ["#F1F1F5", "#E3E3E3", "#999999", "#191919"],
       },
     } as const;
     ```
     ![스크린샷 2023-05-04 오전 9.59.05.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b9b92fd8-860c-4fb5-923c-dcb52009954b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-05-04_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_9.59.05.png)

3. [타입스크립트 계층](https://www.zhenghao.io/posts/type-hierarchy-tree)

   상위 타입

   - any
   - unknown

   하위 타입

   - 대표적으로 never
   - 하위 타입이 상위 타입보다 더 엄격함
     - `{name:string, age:number}` 이 `{name:string}`보다 엄격함
     - 따라서 `{name:string, age:number}` 는 `{name:string}` 의 하위 타임
       ```tsx
       let onlyName = {
         name: "sion",
       };

       let nameAndAge = {
         name: "sion",
         age: 19,
       };

       onlyName = nameAndAge;
       nameAndAge = onlyName;
       ```

   ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/229c1a06-2b4b-4c90-a3fb-bc82f5679399/Untitled.png)

   Q. 이 코드에서 어느 부분이 에러가 발생할까요?

   ```jsx
   let stringVariable: string = "string";
   let anyVariable: any;
   let unknownVariable: unknown;

   anyVariable = stringVariable;
   unknownVariable = stringVariable;
   stringVariable = anyVariable;
   stringVariable = unknownVariable;
   ```

   - A. 정답
     - any는 예외
     - 하지만 any는 TS에서 공식적으로 인정하는… 거의 모든 타입을 허용하는 백터널(최후의 방법)이다.
     ```tsx
     let stringVariable: string = "string";
     let anyVariable: any;
     let unknownVariable: unknown;

     anyVariable = stringVariable;
     unknownVariable = stringVariable;
     stringVariable = anyVariable;
     stringVariable = unknownVariable; // 'unknown' 형식은 'string' 형식에 할당할 수 없습니다.
     ```

### References

[프리온보딩 프론트엔드 챌린지 2월](https://www.notion.so/2-63e1f7e3aadc444cb07aa698e91c3328)

[The type hierarchy tree](https://www.zhenghao.io/posts/type-hierarchy-tree)
