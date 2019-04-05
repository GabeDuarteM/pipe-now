/* tslint:disable no-magic-numbers */

import pipe from '.'

describe('pipe', () => {
  it('should return 16 when the following parameters are passed: (256, Math.sqrt)', () => {
    const initialValue = 256
    const expected = 16
    const actual = pipe(
      initialValue,
      Math.sqrt,
    )

    expect(actual).toBe(expected)
  })

  it('should return 4 when the following parameters are passed: (256, Math.sqrt, Math.sqrt)', () => {
    const initialValue = 256
    const expected = 4
    const actual = pipe(
      initialValue,
      Math.sqrt,
      Math.sqrt,
    )

    expect(actual).toBe(expected)
  })

  it('should return 10 when the following parameters are passed: (256, Math.sqrt, Math.sqrt, val => val + 6)', () => {
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

  it('should return "PIPES 👌 ARE 👌 AWESOME"', () => {
    const initialValue = 'pipes are awesome'
    const expected = 'PIPES 👌 ARE 👌 AWESOME'

    const uppercase = (val: string): string => val.toUpperCase()
    const emojifySpaces = (val: string): string => val.replace(/ /g, ' 👌 ')

    const actual = pipe(
      initialValue,
      emojifySpaces,
      uppercase,
    )

    expect(actual).toBe(expected)
  })

  it('should correctly calculate the height average of the people', async () => {
    function fetchPeople(): Promise<any> {
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

    function average(arr: number[]): number {
      const sum = arr.reduce((a, b) => a + b)
      const avg = sum / arr.length

      return avg
    }

    const peopleHeightAverage = pipe(
      await fetchPeople(),
      (values) => values.results,
      (values) => values.map((people) => people.height),
      (values) => values.map(Number),
      average,
      Math.round,
    )

    expect(peopleHeightAverage).toBe(180)
  })
})
