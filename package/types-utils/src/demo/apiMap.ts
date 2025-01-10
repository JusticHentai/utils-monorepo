import ApiMap from '../ApiMap'
import Merge from '../Merge'

interface Options {
  bounces: boolean // 是否启用 禁止上下弹动
  hide?: number // 是否启用 隐藏顶部栏
}

interface DefaultOptions {
  bounces: boolean
}

type InnerOptions = Merge<Options, DefaultOptions> & {
  [key: string]: any
}

type OptionsMap = ApiMap<InnerOptions>

const options: Options = {
  bounces: true,
}

const defaults: DefaultOptions = {
  bounces: true,
}

const innerOptions: InnerOptions = { ...defaults, ...options }

const optionsMap: OptionsMap = {
  bounces: (val: boolean) => {
    console.log(val)
  },
  hide: (val: number) => {
    console.log(val)
  },
}

for (const key in innerOptions) {
  optionsMap[key](innerOptions[key])
}
