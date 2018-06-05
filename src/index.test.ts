/* tslint:disable no-magic-numbers */

import pipe from "./"

describe("pipe", () => {
  // describe("deve passar o primeiro argumento passado pro pipe para as funções seguintes e retornar o resultado da ultima função", () => {
  it("should return 16 when the following parameters are passed: (256, Math.sqrt)", () => {
    const initialValue = 256
    const expected = 16
    const actual = pipe(
      initialValue,
      Math.sqrt,
    )

    expect(actual).toBe(expected)
  })

  it("should return 4 when the following parameters are passed: (256, Math.sqrt, Math.sqrt)", () => {
    const initialValue = 256
    const expected = 4
    const actual = pipe(
      initialValue,
      Math.sqrt,
      Math.sqrt,
    )

    expect(actual).toBe(expected)
  })

  it("should return 10 when the following parameters are passed: (256, Math.sqrt, Math.sqrt, val => val + 6)", () => {
    const initialValue = 256
    const expected = 10
    const actual = pipe(
      initialValue,
      Math.sqrt,
      Math.sqrt,
      value => value + 6,
    )

    expect(actual).toBe(expected)
  })

  it('should return "GLORY 👌 TO 👌 THE 👌 PIPES" when the following parameters are passed: ("glory to the pipes", topifySpaces, uppercase) ', () => {
    const initialValue = "glory to the pipes"
    const expected = "GLORY 👌 TO 👌 THE 👌 PIPES"

    const uppercase = val => val.toUpperCase()
    const topifySpaces = val => val.replace(/ /g, " 👌 ")

    const actual = pipe(
      initialValue,
      topifySpaces,
      uppercase,
    )

    expect(actual).toBe(expected)
  })
})
