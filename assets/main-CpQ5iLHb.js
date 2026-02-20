const n=`import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          // 直接指到源码，Vite 会转译 TS，无需在 CI 里先 build js-utils
          '@justichentai/js-utils': path.resolve(
            __dirname,
            '../packages/js-utils/src'
          ),
        },
      },
    }
  },
}

export default config
`;export{n as M};
