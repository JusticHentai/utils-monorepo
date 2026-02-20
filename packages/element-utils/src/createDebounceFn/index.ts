/** 防抖函数配置选项 */
export interface DebounceFnOptions {
  /** 等待时间（毫秒），默认 1000 */
  wait?: number;
  /** 是否在延迟开始前调用，默认 false */
  leading?: boolean;
  /** 是否在延迟结束后调用，默认 true */
  trailing?: boolean;
  /** 最大等待时间 */
  maxWait?: number;
}

/** 防抖后的函数类型 */
export interface DebouncedFn<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T> | undefined;
  /** 取消防抖 */
  cancel: () => void;
  /** 立即执行 */
  flush: () => ReturnType<T> | undefined;
}

/**
 * 创建防抖函数
 * @param fn - 要防抖的函数
 * @param wait - 等待时间（毫秒）
 * @param options - 配置选项
 * @returns 防抖后的函数
 */
export const createDebounceFn = <T extends (...args: any[]) => any>(
  fn: T,
  wait: number = 1000,
  options: DebounceFnOptions = {}
): DebouncedFn<T> => {
  const { leading = false, trailing = true, maxWait } = options;

  let timerId: ReturnType<typeof setTimeout> | null = null;
  let lastArgs: Parameters<T> | null = null;
  let lastThis: any = null;
  let result: ReturnType<T> | undefined;
  let lastCallTime: number | undefined;
  let lastInvokeTime = 0;

  const invokeFunc = (time: number) => {
    const args = lastArgs;
    const thisArg = lastThis;

    lastArgs = null;
    lastThis = null;
    lastInvokeTime = time;
    result = fn.apply(thisArg, args as Parameters<T>);
    return result;
  };

  const shouldInvoke = (time: number) => {
    const timeSinceLastCall = lastCallTime === undefined ? 0 : time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;

    return (
      lastCallTime === undefined ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      (maxWait !== undefined && timeSinceLastInvoke >= maxWait)
    );
  };

  const remainingWait = (time: number) => {
    const timeSinceLastCall = lastCallTime === undefined ? 0 : time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;

    return maxWait !== undefined
      ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  };

  const trailingEdge = (time: number) => {
    timerId = null;

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = null;
    lastThis = null;
    return result;
  };

  const timerExpired = () => {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  };

  const leadingEdge = (time: number) => {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  };

  const cancel = () => {
    if (timerId !== null) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = null;
    lastCallTime = undefined;
    lastThis = null;
    timerId = null;
  };

  const flush = () => {
    if (timerId === null) {
      return result;
    }
    return trailingEdge(Date.now());
  };

  const debounced = function (this: any, ...args: Parameters<T>) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === null) {
        return leadingEdge(lastCallTime);
      }
      if (maxWait !== undefined) {
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === null) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  } as DebouncedFn<T>;

  debounced.cancel = cancel;
  debounced.flush = flush;

  return debounced;
};

export default createDebounceFn;
