// async
export { default as awaitFormat } from './async/awaitFormat'
export { default as ResourceController } from './async/resource-controller'
export { default as retry } from './async/retry'
export { default as sleep } from './async/sleep'
export { default as timeout } from './async/timeout'

// error
export { default as collectError } from './error'

// is
export { default as isArray } from './is/isArray'
export { default as isEmptyObject } from './is/isEmptyObject'
export { default as isFunction } from './is/isFunction'
export { default as isNumber } from './is/isNumber'
export { default as isObject } from './is/isObject'
export { default as isString } from './is/isString'
export { default as isWindow } from './is/isWindow'

// log
export { default as logger } from './logger'

// math
export { default as Axis2D } from './math/axis/Axis2D'
export { default as getDistance } from './math/axis/getDistance'
export { default as getPosition } from './math/axis/getPosition'
export { default as lerp } from './math/axis/lerp'
export type { default as Point } from './math/axis/Point'
export { default as clamp } from './math/clamp'
export { default as random } from './math/random'
export { default as truncate } from './math/truncate'

// object
export { default as deepClone } from './object/deepClone'
export { default as merge } from './object/merge'
export { default as pick } from './object/pick'
export { default as walk } from './object/walk'

// time
export { default as countdown } from './time/countdown'
export { default as formatTime } from './time/formatTime'
export { default as getLocalTime } from './time/getLocalTime'
export { default as getTimezone } from './time/getTimezone'
export { default as Timer } from './time/Timer'
export { default as timeTransform } from './time/timeTransform'
