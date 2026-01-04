import {
  ArrayRule,
  DateRule,
  MockDataInstance,
  MockDataOptions,
  MockRule,
  NumberRule,
  ObjectRule,
  StringRule,
} from './interface'

/**
 * 创建 Mock 数据生成器
 * 支持规则化生成各种类型的模拟数据
 */
const createMockData = (options: MockDataOptions): MockDataInstance => {
  const { count, schema, seed } = options

  if (count < 0) {
    throw new Error('count must be a non-negative number')
  }

  if (!schema || typeof schema !== 'object') {
    throw new Error('schema must be a valid object')
  }

  // 自增计数器
  const incrementCounters: Map<string, number> = new Map()

  // 简单的伪随机数生成器（支持种子）
  let randomSeed = seed ?? Date.now()
  const seededRandom = (): number => {
    randomSeed = (randomSeed * 9301 + 49297) % 233280
    return randomSeed / 233280
  }

  const random = seed !== undefined ? seededRandom : Math.random

  /**
   * 生成随机整数
   */
  const randomInt = (min: number, max: number): number => {
    return Math.floor(random() * (max - min + 1)) + min
  }

  /**
   * 生成随机浮点数
   */
  const randomFloat = (min: number, max: number, decimals: number): number => {
    const value = random() * (max - min) + min
    return Number(value.toFixed(decimals))
  }

  /**
   * 从数组中随机选择
   */
  const randomPick = <T>(arr: T[]): T => {
    return arr[randomInt(0, arr.length - 1)]
  }

  /**
   * 生成随机字符串
   */
  const generateString = (rule: StringRule): string => {
    const {
      minLength = 5,
      maxLength = 10,
      charset = 'alphanumeric',
      prefix = '',
      suffix = '',
    } = rule

    const length = randomInt(minLength, maxLength)
    let chars = ''

    switch (charset) {
      case 'alpha':
        chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        break
      case 'numeric':
        chars = '0123456789'
        break
      case 'chinese':
        // 生成常用汉字
        const chineseChars: string[] = []
        for (let i = 0; i < length; i++) {
          chineseChars.push(String.fromCharCode(randomInt(0x4e00, 0x9fa5)))
        }
        return prefix + chineseChars.join('') + suffix
      default:
        chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    }

    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars[randomInt(0, chars.length - 1)]
    }

    return prefix + result + suffix
  }

  /**
   * 生成随机数字
   */
  const generateNumber = (rule: NumberRule): number => {
    const { min = 0, max = 100, decimals = 0 } = rule

    if (decimals === 0) {
      return randomInt(min, max)
    }

    return randomFloat(min, max, decimals)
  }

  /**
   * 生成随机布尔值
   */
  const generateBoolean = (probability = 0.5): boolean => {
    return random() < probability
  }

  /**
   * 生成随机日期
   */
  const generateDate = (rule: DateRule): string | number | Date => {
    const {
      start = new Date('2020-01-01'),
      end = new Date(),
      format = 'iso',
    } = rule

    const startTime = new Date(start).getTime()
    const endTime = new Date(end).getTime()
    const randomTime = randomInt(startTime, endTime)
    const date = new Date(randomTime)

    switch (format) {
      case 'timestamp':
        return randomTime
      case 'date':
        return date
      default:
        return date.toISOString()
    }
  }

  /**
   * 生成 UUID
   */
  const generateUUID = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  /**
   * 生成随机邮箱
   */
  const generateEmail = (
    domains: string[] = ['gmail.com', 'qq.com', '163.com', 'outlook.com']
  ): string => {
    const username = generateString({
      type: 'string',
      minLength: 5,
      maxLength: 10,
      charset: 'alpha',
    }).toLowerCase()
    return `${username}@${randomPick(domains)}`
  }

  /**
   * 生成随机手机号
   */
  const generatePhone = (countryCode = '86'): string => {
    const prefixes = ['13', '14', '15', '16', '17', '18', '19']
    const prefix = randomPick(prefixes)
    let number = prefix

    for (let i = 0; i < 9; i++) {
      number += randomInt(0, 9)
    }

    return countryCode === '86' ? number : `+${countryCode}${number}`
  }

  /**
   * 生成占位图片 URL
   */
  const generateImage = (width = 200, height = 200): string => {
    return `https://picsum.photos/${width}/${height}?random=${randomInt(1, 10000)}`
  }

  /**
   * 生成随机段落
   */
  const generateParagraph = (minSentences = 3, maxSentences = 6): string => {
    const sentences = randomInt(minSentences, maxSentences)
    const result: string[] = []

    for (let i = 0; i < sentences; i++) {
      const wordCount = randomInt(5, 15)
      const words: string[] = []

      for (let j = 0; j < wordCount; j++) {
        words.push(
          generateString({
            type: 'string',
            minLength: 3,
            maxLength: 8,
            charset: 'alpha',
          }).toLowerCase()
        )
      }

      let sentence = words.join(' ')
      sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.'
      result.push(sentence)
    }

    return result.join(' ')
  }

  /**
   * 根据规则生成值
   */
  const generateValue = (
    rule: MockRule,
    index: number,
    path: string
  ): unknown => {
    switch (rule.type) {
      case 'string':
        return generateString(rule)

      case 'number':
        return generateNumber(rule)

      case 'boolean':
        return generateBoolean(rule.probability)

      case 'date':
        return generateDate(rule)

      case 'array': {
        const arrayRule = rule as ArrayRule
        const length = randomInt(
          arrayRule.minLength ?? 1,
          arrayRule.maxLength ?? 5
        )
        const result: unknown[] = []

        for (let i = 0; i < length; i++) {
          result.push(generateValue(arrayRule.itemRule, i, `${path}[${i}]`))
        }

        return result
      }

      case 'object': {
        const objectRule = rule as ObjectRule
        const result: Record<string, unknown> = {}

        for (const [key, propRule] of Object.entries(objectRule.properties)) {
          result[key] = generateValue(propRule, index, `${path}.${key}`)
        }

        return result
      }

      case 'enum':
        return randomPick(rule.values)

      case 'custom':
        return rule.generator(index)

      case 'increment': {
        const counterKey = path
        const currentValue =
          incrementCounters.get(counterKey) ?? rule.start ?? 1
        incrementCounters.set(counterKey, currentValue + (rule.step ?? 1))
        return currentValue
      }

      case 'uuid':
        return generateUUID()

      case 'email':
        return generateEmail(rule.domains)

      case 'phone':
        return generatePhone(rule.countryCode)

      case 'image':
        return generateImage(rule.width, rule.height)

      case 'paragraph':
        return generateParagraph(rule.minSentences, rule.maxSentences)

      default:
        throw new Error(`Unknown rule type: ${(rule as MockRule).type}`)
    }
  }

  /**
   * 生成单条数据
   */
  const generateOne = <T = Record<string, unknown>>(index = 0): T => {
    const result: Record<string, unknown> = {}

    for (const [key, rule] of Object.entries(schema)) {
      result[key] = generateValue(rule, index, key)
    }

    return result as T
  }

  /**
   * 生成多条数据
   */
  const generateMany = <T = Record<string, unknown>>(
    generateCount?: number
  ): T[] => {
    const targetCount = generateCount ?? count
    const result: T[] = []

    for (let i = 0; i < targetCount; i++) {
      result.push(generateOne<T>(i))
    }

    return result
  }

  /**
   * 重置自增计数器
   */
  const reset = (): void => {
    incrementCounters.clear()
    randomSeed = seed ?? Date.now()
  }

  return {
    generateOne,
    generateMany,
    reset,
  }
}

export default createMockData
