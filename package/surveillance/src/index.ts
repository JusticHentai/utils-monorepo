import { Options } from '@/types'
import eventInit from './eventInit'

const defaults: Partial<Options> = {}

export default class Surveillance {
  options: Options

  constructor(options: Options = {}) {
    this.options = { ...defaults, ...options }

    console.log(
      '=== Surveillance ===',
      window?.performance?.getEntriesByType?.('navigation')?.[0]
    )

    eventInit()
  }

  eventInit() {
    eventInit()
  }
}
