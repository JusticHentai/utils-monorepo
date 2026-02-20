/** 节流函数配置选项 */
export interface ThrottleFnOptions {
  /** 等待时间（毫秒），默认 1000 */
  wait?: number;
  /** 是否在延迟开始前调用，默认 true */
  leading?: boolean;
  /** 是否在延迟结束后调用，默认 true */
  trailing?: boolean;
}

/** 节流后的函数类型 */
export interface ThrottledFn<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T> | undefined;
  /** 取消节流 */
  cancel: () => void;
  /** 立即执行 */
  flush: () => ReturnType<T> | undefined;
}

/**
 * 创建节流函数
 * @param fn - 要节流的函数
 * @param wait - 等待时间（毫秒）
 * @param options - 配置选项
 * @returns 节流后的函数
 */
export const createThrottleFn = <T extends (...args: any[]) => any>(
  fn: T,
  wait: number = 1000,
  options: ThrottleFnOptions = {}
): ThrottledFn<T> => {
  const { leading = true, trailing = true } = options;

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

  const remainingWait = (time: number) => {
    const timeSinceLastCall = lastCallTime === undefined ? 0 : time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;

    return Math.min(timeWaiting, wait - timeSinceLastInvoke);
  };

  const shouldInvoke = (time: number) => {
    const timeSinceLastCall = lastCallTime === undefined ? 0 : time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;

    return (
      lastCallTime === undefined ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      timeSinceLastInvoke >= wait
    );
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

  const throttled = function (this: any, ...args: Parameters<T>) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === null) {
        return leadingEdge(lastCallTime);
      }
    }
    if (timerId === null) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  } as ThrottledFn<T>;

  throttled.cancel = cancel;
  throttled.flush = flush;

  return throttled;
};

export default createThrottleFn;
