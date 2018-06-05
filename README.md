# pipe-now

A tiny lib (less than 500 bytes) that simulates the behavior of the [pipeline-operator proposal](https://github.com/tc39/proposal-pipeline-operator).

# How to use

Pretty much the same way you would use the pipeline operator, but with a function. The first value will be the initial value, and the rest of the arguments are the functions to be piped

Check out the example:

```js
import pipe from "pipe-now"

const uppercase = val => val.toUpperCase()
const topifySpaces = val => val.replace(/ /g, " 👌 ")

pipe(
  256,
  Math.sqrt,
  Math.sqrt,
) // result: 4

pipe(
  256,
  Math.sqrt,
  val => val + 2,
) // result: 18

pipe(
  "glory to the pipes",
  topifySpaces,
  uppercase,
) // result: 'GLORY 👌 TO 👌 THE 👌 PIPES'
```

# FAQ

## Why not just use [`_.flow`](lodash.com/docs/#flow)

`_.flow` returns a function for you to pass the initial value, which is different from the pipeline operator proposal that only returns the final value, and you can pass the first argument as the initial value.

You could use flow with some quirks (`_.flow(() => "initial value", val => val.toUpperCase())()`), but in my opinion, this is quite ugly, so I decided to just make this lib.
