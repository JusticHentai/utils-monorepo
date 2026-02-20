import { analyzeExports } from './core/analyzeExports'

const md = async () => {
  const res = await analyzeExports(['src/commands/md/test/index.ts'])
}

md()

export default md
