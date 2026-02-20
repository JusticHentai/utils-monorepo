/**
 * 深度合并类型：将 Source 合并到 Target
 * 当 Source 是 Partial<Target> 时，返回 Target 类型
 */
export type DeepMerge<T, S> =
  S extends Partial<T>
    ? T
    : T extends object
      ? S extends object
        ? {
            [K in keyof T | keyof S]: K extends keyof S
              ? K extends keyof T
                ? DeepMerge<T[K], S[K]>
                : S[K]
              : K extends keyof T
                ? T[K]
                : never
          }
        : S extends undefined
          ? T
          : S
      : S extends undefined
        ? T
        : S
