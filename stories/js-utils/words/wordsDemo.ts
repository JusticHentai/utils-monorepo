import { action } from 'storybook/actions'
import words from '../../../packages/js-utils/src/words'

const wordsDemo = () => {
  // 各种命名格式
  action('words - camelCase')(words('camelCaseString'))
  action('words - PascalCase')(words('PascalCaseString'))
  action('words - snake_case')(words('snake_case_string'))
  action('words - kebab-case')(words('kebab-case-string'))

  // 复合词（lodash 测试用例）
  action('words - 数字+单词')(words('12ft'))
  action('words - 连续大写')(words('XMLHttp'))
  action('words - XML大写变体')(words('XmlHTTP'))
  action('words - ISO混合')(words('isISO8601'))
  action('words - 大写序列后跟单词')(words('LETTERSAeiouAreVowels'))

  // 带数字的复合词
  action('words - 数字嵌入')(words('tooLegit2Quit'))
  action('words - 大数字')(words('walk500Miles'))

  // 空字符串
  action('words - 空字符串')(words(''))

  // 混合格式
  action('words - 混合 FOO_barBaz')(words('FOO_barBaz'))
}

export default wordsDemo
