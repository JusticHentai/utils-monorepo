import { action } from 'storybook/actions'
import { formatCodeBatch } from '../../../packages/element-utils/src/formatCode'

export const runBatchDemo = async () => {
  const codes = [
    {
      code: `const a=1;const b=2`,
      options: { language: 'javascript' as const },
    },
    { code: `{"a":1,"b":2}`, options: { language: 'json' as const } },
    {
      code: `.foo{color:red;font-size:14px}`,
      options: { language: 'css' as const },
    },
  ]

  action('原始代码')(codes.map((c) => c.code))

  const results = await formatCodeBatch(codes)

  action('批量格式化结果')(results)
}
