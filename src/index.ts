const pipe = <T>(initialValue: T, ...args: any[]): any => {
  const finalValue = args.reduce((value, func) => {
    const nextValue = func(value)

    return nextValue
  }, initialValue)

  return finalValue
}

export default pipe
