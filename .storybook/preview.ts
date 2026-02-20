import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  parameters: {
    options: {
      storySort: (a, b) => {
        const aTitle = a.title || ''
        const bTitle = b.title || ''

        // "介绍" 始终排在最前面
        if (aTitle === '介绍') return -1
        if (bTitle === '介绍') return 1

        // 判断是否以中文开头
        const chineseRegex = /^[\u4e00-\u9fa5]/
        const aIsChinese = chineseRegex.test(aTitle)
        const bIsChinese = chineseRegex.test(bTitle)

        // 中文排在英文前面
        if (aIsChinese && !bIsChinese) return -1
        if (!aIsChinese && bIsChinese) return 1

        // 同类型按 localeCompare 排序
        return aTitle.localeCompare(bTitle, 'zh-CN', { numeric: true })
      },
    },
  },
}

export default preview
