## repeat

repeat 함수는 문자열을 반복하여 새로운 문자열을 반환해주는 함수이다

```js
const str = "str";
console.log(str.repeat(3)); // => strstrstr
```

## Math.floor, ceil, round

Math.floor 함수는 소수점 이하를 내림해주는 함수이다

```js
const num = 12.345;
console.log(Math.floor(num)); // => 12
```

Math.ceil 함수는 소수점 이하를 올림하고

Math.round 함수는 소수점 이하를 반올림한다

## parseInt

parseInt 함수는 소수점 이하를 내림해주는 함수이다

```js
const num = 12.345;
console.log(parseInt(num)); // => 12
```

### Math.floor과 parseInt의 차이

음수일 경우에 Math.floor은 내림을 하지만 parseInt는 올림을 한다  
성능적으로는 Math.floor이 더 빠르다고하여 앞으로는 Math.floor을 써야겠다

## replace

replace는 문자열을 치환해주는 함수이다

```js
const num = "12345";
console.log(num.replace("1", "01")); // => 012345
```

하지만 중복된 문자는 처리하지 못한다

```js
const num = "11111";
console.log(num.replace("1", "0")); // => 01111
```

중복된 문자까지 처리하라면 정규식을 사용해야한다

```js
const num = "11111";
console.log(num.replace(/1/g, "0")); // => 00000
```

## lastIndexOf

lastIndexOf(n)는 배열에서 n이 존재하는 마지막 `index`를 반환한다

```js
const nums = [0, 1, 2, 3, 4, 0];
console.log(nums.lastIndexOf(0)); // => 5
```

## Math.pow, sqrt

`Math.pow`는 수를 제곱해준다.

```js
const num = Math.pow(3, 3);
console.log(num); // => 27
```

첫 번째 인자로는 제곱할 수, 두 번째 인자로는 몇 번 제곱할 것인지가 들어간다.

`Math.sqrt`는 제곱근을 알려준다.

```js
const num = Math.sqrt(9);
console.log(num); // => 3
```

인자로 제곱근을 구할 수가 들어간다.  
세제곱근을 구하려면 `cbrt`를 사용한다.
