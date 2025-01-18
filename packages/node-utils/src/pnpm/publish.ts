import shell from '@/shell'

const publish = async () => {
  return await shell('pnpm publish')
}

export default publish
