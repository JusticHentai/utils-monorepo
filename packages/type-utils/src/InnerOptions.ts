import Merge from './Merge'

type InnerOptions<
  Options extends Object,
  DefaultOptions extends Object
> = Merge<Options, DefaultOptions> & { [key: string]: any }

export default InnerOptions
