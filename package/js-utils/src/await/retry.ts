import awaitFormat from './awaitFormat'

const retry = async <T>(
  fn: () => Promise<T>,
  retryCount: number = 3
): Promise<[T, undefined] | [undefined, any]> => {
  const formatFn = awaitFormat<any, T>(fn)

  let count = retryCount
  let error

  while (count) {
    const [res, err] = await formatFn()

    if (res) {
      return [res, undefined]
    }

    error = err
    count--
  }

  return [undefined, error]
}

export default retry
