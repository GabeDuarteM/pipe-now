<div align="center">
  <h1>pipe-now</h1>

  <p>A tiny package that simulates the behavior of the <a href="https://github.com/tc39/proposal-pipeline-operator">pipeline-operator proposal</a>.</p>
</div>

<hr />

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]

[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```bash
npm install --save pipe-now
```

## The problem

The pipeline operator is an awesome thing, but unfortunately the proposals available for babel vary quite a bit, and they can still change more, as they are still in early stages of development and there's no agreement on an API yet.

## This solution

This package tries to solve the problem stated above by simulating the pipeline operator through a function. I know, it's not as nice as having an actual syntax for that, but until the proposal gets more stable this can be a good replacement.

## Usage

This package exports a function which receives a plain value as the first argument, and all the next arguments are functions that receives the previous value, and returns the next value.

You can use it with inline functions:

```js
import pipe from 'pipe-now'

function getFruits() {
  const fruitsUppercase = ['APPLE', 'BANANA', 'ORANGE']
  const fruitsLowercase = pipe(
    fruitsUppercase,
    (values) => values.map((value) => value.toLowerCase()),
  )
  return fruitsLowercase // ['apple', 'banana', 'orange']
}
```

To avoid code duplication, you can also extract the functions and just pass the reference to them:

```js
import pipe from 'pipe-now'

function arrayToLowerCase(arr) {
  return arr.map((value) => value.toLowerCase())
}

function getFruits() {
  const fruitsUppercase = ['APPLE', 'BANANA', 'ORANGE']
  const fruitsLowercase = pipe(
    fruitsUppercase,
    arrayToLowerCase,
  )
  return fruitsLowercase // ['apple', 'banana', 'orange']
}
```

You can also check below a more complex use of the `pipe` function, with data fetching and manipulating this data:

```js
import pipe from 'pipe-now'

// Simulates an async data fetch
function fetchPeople() {
  return Promise.resolve({
    count: 3,
    results: [
      {
        name: 'Luke Skywalker',
        height: '172',
      },
      {
        name: 'C-3PO',
        height: '167',
      },
      {
        name: 'Darth Vader',
        height: '202',
      },
    ],
  })
}

function average(arr) {
  const sum = arr.reduce((a, b) => a + b)
  const avg = sum / arr.length

  return avg
}

async function getPeopleHeightAverage() {
  const peopleHeightAverage = pipe(
    await fetchPeople(), // Get list of Star Wars people
    (values) => values.results, // Get only the `results` property of the response
    (values) => values.map((people) => people.height), // Get only the people height
    (values) => values.map(Number), // Convert values from string to number
    average, // Calculate the average
    Math.round, // Round the value
  )

  return peopleHeightAverage // returns 180
}
```

## Inspiration

- [The pipeline operator docs on Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Pipeline_operator)

- [The pipeline operator proposal](https://github.com/tc39/proposal-pipeline-operator)

## Other Solutions

### [lodash's `flow`](https://lodash.com/docs/#flow)

You can kind of use it to simulate the pipeline syntax, like the following:

```js
const value = _.flow(
  () => 'initial value',
  (val) => val.toUpperCase(),
)()
```

If you are already using lodash, you can of course also create a wrapper for that.

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/com/GabrielDuarteM/pipe-now/master.svg?style=flat-square
[build]: https://travis-ci.com/GabrielDuarteM/pipe-now
[coverage-badge]: https://img.shields.io/codecov/c/github/GabrielDuarteM/pipe-now.svg?style=flat-square
[coverage]: https://codecov.io/github/GabrielDuarteM/pipe-now
[version-badge]: https://img.shields.io/npm/v/pipe-now.svg?style=flat-square
[package]: https://www.npmjs.com/package/pipe-now
[downloads-badge]: https://img.shields.io/npm/dm/pipe-now.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/pipe-now
[license-badge]: https://img.shields.io/github/license/GabrielDuarteM/pipe-now.svg?style=flat-square
[license]: https://github.com/GabrielDuarteM/pipe-now/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/GabrielDuarteM/pipe-now/blob/master/other/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/GabrielDuarteM/pipe-now.svg?style=social
[github-watch]: https://github.com/GabrielDuarteM/pipe-now/watchers
[github-star-badge]: https://img.shields.io/github/stars/GabrielDuarteM/pipe-now.svg?style=social
[github-star]: https://github.com/GabrielDuarteM/pipe-now/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20pipe-now%20by%20%40GabrielDuarteM%20https%3A%2F%2Fgithub.com%2FGabrielDuarteM%2Fpipe-now%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/GabrielDuarteM/pipe-now.svg?style=social
