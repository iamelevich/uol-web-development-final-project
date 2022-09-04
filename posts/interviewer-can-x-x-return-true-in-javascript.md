---
title: "Interviewer: Can `x !== x` Return True in JavaScript"
date: "2022-04-29"
authorName: "fatfish"
authorLink: "https://fatfish.medium.com/"
source: "https://medium.com/javascript-in-plain-english/interviewer-can-x-x-return-true-in-javascript-7e1d1fa7b5cd"
sourceName: "Medium"
image: "/images/interviewer-can-x-x-return-true-in-javascript.jpeg"
---

Recently I was asked a few strange interview questions. They are different from the regular questions: these interview questions seem very easy, but they test your thorough understanding of JavaScript. How many can you answer correctly?

![Interviewer: Can `x !== x` Return True in JavaScript](/images/interviewer-can-x-x-return-true-in-javascript.jpeg)

# Can `x !== x` return true？
What should be the value of `x` to output `hello fatfish`?

```js
const x = ? // Please fill in the value of "x?
if (x !== x) {
  console.log('hello fatfish')
}
```

**It’s amazing. Is there any value that is not equal to itself?** However, there is a value `NaN` in JavaScript, which is not equal to any value or even itself.

```js
const x = NaN // Please fill in the value of "x?
if (x !== x) {
  console.log('hello fatfish')
}
console.log(NaN === NaN) // false
console.log(x !== x) // true
console.log(Number.isNaN(x)) // true
```

# Can `(!isNaN(x) && x !== x)` return true?

Okay, when we filter out `NaN`, what other value can make a value not equal to itself?

```js
const x = ? // Please fill in the value of "x?
if(!isNaN(x) && x !== x) {
  console.log('hello fatfish')
}
```

Maybe you know `object. Defineproperty`, which can help us solve this problem.

```js
window.x = 0 // Any value is OK
Object.defineProperty(window, 'x', {
  get () {
    return Math.random()
  }
})
console.log(x) // 0.12259077808826002
console.log(x === x) // false
console.log(x !== x) // true
```

# How to make `x === x + 1`?

This question may not be easy, but as long as you know JavaScript, you will know 

> The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (2⁵³ — 1).(From [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER))

```js
const x = ? // Please fill in the value of "x?
if (x === x + 1) {
  console.log('hello fatfish')
}
```

So we can assign `x` any value greater than `Number.MAX_SAFE_INTEGER`.

```js
const x =  Number.MAX_SAFE_INTEGER + 1// Please fill in the value of "x?
if (x === x + 1) {
  console.log('hello fatfish')
}
```

# Can `x > x` be true？

I don’t want to read anymore, what kind of rubbish question is that?

```js
const x = ? // Please fill in the value of "x?
if (x > x) {
  console.log('hello fatfish')
}
```

Although it seems unlikely, how can a value be greater than itself? However, we can use the `Symbol.toPrimitive` feature to complete the question.

```js
const x = { // Please fill in the value of "x?
  value: 1,
  [ Symbol.toPrimitive ] () {
    console.log('x', this.value)
    return --this.value
  }
}

if (x > x) {
  console.log('hello fatfish')
}
```

**Wow, that’s amazing!**

# `typeof x === ‘undefined’ && x.length > 0` ?

```js
const x = ? // Please fill in the value of "x?
if(typeof x === 'undefined' && x.length > 0) {
  console.log('hello fatfish')
}
```

I have to admit that JavaScript is an amazing language. Besides undefined itself, what other value can make `typeof x === undefined` `true`?

The answer is document. All An HTMLAllCollection which contains every element in the document (from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/all)).

```js
const x = document.all // Please fill in the value of "x?
if(typeof x === 'undefined' && x.length > 0) {
  console.log('hello fatfish')
}

console.log(x)
console.log(typeof x)
console.log(x === undefined)
```