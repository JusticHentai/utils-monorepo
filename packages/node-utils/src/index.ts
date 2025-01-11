import { Options } from '@/types'

const defaults: Partial<Options> = {}

export default class Utils {
  options: Options

  constructor(options: Options = {}) {
    this.options = { ...defaults, ...options }
  }
}
