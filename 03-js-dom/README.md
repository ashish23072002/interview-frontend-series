#### 2. ❓ What is currying in JavaScript?
Answer:
Currying is a technique where a function doesn't take all arguments at once but one by one.


```js
function multiply(a) {
  return function(b) {
    return a * b;
  };
}
const double = multiply(2);
console.log(double(5)); // 10

```

### 3. ❓ What is a closure in JavaScript?
Answer:
A closure is a function that remembers variables from its outer scope even after the outer function has finished executing.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const fn = outer();
fn(); // 1
fn(); // 2
```


### 4. ❓ What is event delegation?
Answer:
Event delegation is a technique where a single parent element handles events for all of its child elements using event bubbling.

### 5. ❓ What is hoisting?
Answer:
In JavaScript, variable and function declarations are moved to the top of their scope before code execution.


### 7. ❓ What is the difference between synchronous and asynchronous code?
Type	Description
Synchronous	Code runs line-by-line
Asynchronous	Tasks (like API calls) don't block execution and run in background


### 8. ❓ What are Promises and Promise Chaining?
Promises:
A Promise represents an asynchronous operation's eventual result.

Promise Chaining:
Linking multiple .then() calls so output of one feeds the next.

Example:

```js
function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("data"), 1000);
  });
}

getData()
  .then(result => result + " processed")
  .then(final => console.log(final)); // "data processed"

```



### 9. ❓ What are Promises and Promise Chaining?
Promises:
A Promise represents an asynchronous operation's eventual result.

Promise Chaining:
Linking multiple .then() calls so output of one feeds the next.

Example:

```js

function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("data"), 1000);
  });
}

getData()
  .then(result => result + " processed")
  .then(final => console.log(final)); // "data processed"
```
