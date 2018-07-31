/* tslint:disable no-magic-numbers */

import pipe from "."

describe("pipe", () => {
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
    const valueToAdd = 6
    const actual = pipe(
      initialValue,
      Math.sqrt,
      Math.sqrt,
      (value: number) => value + valueToAdd,
    )

    expect(actual).toBe(expected)
  })

  it('should return "GLORY 👌 TO 👌 THE 👌 PIPES" when the following parameters are passed: ("glory to the pipes", topifySpaces, uppercase) ', () => {
    const initialValue = "glory to the pipes"
    const expected = "GLORY 👌 TO 👌 THE 👌 PIPES"

    const uppercase = (val: string) => val.toUpperCase()
    const topifySpaces = (val: string) => val.replace(/ /g, " 👌 ")

    const actual = pipe(
      initialValue,
      topifySpaces,
      uppercase,
    )

    expect(actual).toBe(expected)
  })
})
