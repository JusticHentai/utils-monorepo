import { read } from './src'

const test = async () => {
  const res = await read('package.json')
  console.log(res)
}

test()
