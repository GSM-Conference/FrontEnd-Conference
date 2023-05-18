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
