import MyParameters from '../Parameters'

const test1 = (obj: { [key: string]: any }) => {
  return obj
}

const test2: MyParameters<typeof test1> = {
  nihao: 0,
}

console.log(test2)
