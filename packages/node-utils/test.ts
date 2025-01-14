import { commandExists } from './src'

const test = async () => {
  commandExists('git')
  commandExists('hentai')
  commandExists('hentai-test')
}

test()
