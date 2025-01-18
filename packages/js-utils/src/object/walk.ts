import isObject from '@/is/isObject'

const walk = async (
  obj: Record<string, any>,
  cb: (options: {
    key: string
    value: any
    index: Record<string, any>
    parent: string[]
  }) => any | Promise<any>,
  parent: string[] = []
) => {
  for (const key in obj) {
    const value = obj[key]

    if (isObject(value)) {
      await walk(value, cb, parent.concat([key]))
    } else {
      obj[key] = await cb({
        key,
        value,
        index: obj,
        parent,
      })
    }
  }
}

export default walk
