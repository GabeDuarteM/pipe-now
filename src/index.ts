export type PipeFn<ReceivedValue, ReturnedValue> = (
  value: ReceivedValue,
) => ReturnedValue

function pipe<T, V0>(initialValue: T, ...args: [PipeFn<T, V0>]): V0
function pipe<T, V0, V1>(
  initialValue: T,
  ...args: [PipeFn<T, V0>, PipeFn<V0, V1>]
): V1
function pipe<T, V0, V1, V2>(
  initialValue: T,
  ...args: [PipeFn<T, V0>, PipeFn<V0, V1>, PipeFn<V1, V2>]
): V2
function pipe<T, V0, V1, V2, V3>(
  initialValue: T,
  ...args: [PipeFn<T, V0>, PipeFn<V0, V1>, PipeFn<V1, V2>, PipeFn<V2, V3>]
): V3
function pipe<T, V0, V1, V2, V3, V4>(
  initialValue: T,
  ...args: [
    PipeFn<T, V0>,
    PipeFn<V0, V1>,
    PipeFn<V1, V2>,
    PipeFn<V2, V3>,
    PipeFn<V3, V4>
  ]
): V4
function pipe<T, V0, V1, V2, V3, V4, V5>(
  initialValue: T,
  ...args: [
    PipeFn<T, V0>,
    PipeFn<V0, V1>,
    PipeFn<V1, V2>,
    PipeFn<V2, V3>,
    PipeFn<V3, V4>,
    PipeFn<V4, V5>
  ]
): V5
function pipe<T, V0, V1, V2, V3, V4, V5, V6>(
  initialValue: T,
  ...args: [
    PipeFn<T, V0>,
    PipeFn<V0, V1>,
    PipeFn<V1, V2>,
    PipeFn<V2, V3>,
    PipeFn<V3, V4>,
    PipeFn<V4, V5>,
    PipeFn<V5, V6>
  ]
): V6
function pipe<T, V0, V1, V2, V3, V4, V5, V6, V7>(
  initialValue: T,
  ...args: [
    PipeFn<T, V0>,
    PipeFn<V0, V1>,
    PipeFn<V1, V2>,
    PipeFn<V2, V3>,
    PipeFn<V3, V4>,
    PipeFn<V4, V5>,
    PipeFn<V5, V6>,
    PipeFn<V6, V7>
  ]
): V7
function pipe<T, V0, V1, V2, V3, V4, V5, V6, V7, V8>(
  initialValue: T,
  ...args: [
    PipeFn<T, V0>,
    PipeFn<V0, V1>,
    PipeFn<V1, V2>,
    PipeFn<V2, V3>,
    PipeFn<V3, V4>,
    PipeFn<V4, V5>,
    PipeFn<V5, V6>,
    PipeFn<V6, V7>,
    PipeFn<V7, V8>
  ]
): V8
function pipe<T, V0, V1, V2, V3, V4, V5, V6, V7, V8, V9>(
  initialValue: T,
  ...args: [
    PipeFn<T, V0>,
    PipeFn<V0, V1>,
    PipeFn<V1, V2>,
    PipeFn<V2, V3>,
    PipeFn<V3, V4>,
    PipeFn<V4, V5>,
    PipeFn<V5, V6>,
    PipeFn<V6, V7>,
    PipeFn<V7, V8>,
    PipeFn<V8, V9>
  ]
): V9
function pipe<T, V0, V1, V2, V3, V4, V5, V6, V7, V8, V9, V10>(
  initialValue: T,
  ...args: [
    PipeFn<T, V0>,
    PipeFn<V0, V1>,
    PipeFn<V1, V2>,
    PipeFn<V2, V3>,
    PipeFn<V3, V4>,
    PipeFn<V4, V5>,
    PipeFn<V5, V6>,
    PipeFn<V6, V7>,
    PipeFn<V7, V8>,
    PipeFn<V8, V9>,
    PipeFn<V9, V10>
  ]
): V10
function pipe<T>(initialValue: T, ...args: PipeFn<any, any>[]): any
function pipe<T>(initialValue: T, ...args: PipeFn<any, any>[]): any {
  const finalValue = args.reduce((value, func) => {
    const nextValue = func(value)

    return nextValue
  }, initialValue)

  return finalValue
}

export default pipe
