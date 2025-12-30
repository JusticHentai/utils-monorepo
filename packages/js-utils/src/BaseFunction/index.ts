type BaseFunction<Params extends any[] = any[], Return = any> = (
  ...params: Params
) => Promise<Return>

export default BaseFunction
