import { shell } from './src'

const test = async () => {
  await shell('git add .')
  await shell('git commit -m test')
}

test()
