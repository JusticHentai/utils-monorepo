import { addons } from 'storybook/manager-api'

addons.setConfig({
  sidebar: {
    showRoots: true,
    collapsedRoots: [
      '基础配置',
      'config-utils',
      'element-utils',
      'js-utils',
      'learn-utils',
      'node-utils',
      'style-utils',
      'type-utils',
      'components',
      'utils-template',
      'skills',
    ],
  },
  initialActive: 'docs',
})
