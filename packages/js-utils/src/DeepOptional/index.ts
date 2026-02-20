/**
 * 深度可选
 * @param T 目标对象
 * @param K 路径
 * @returns 深度可选后的对象
 */
type DeepOptional<T, K extends Array<string | number | symbol>> =
  // 最后一层路径：仅将该属性变为可选
  K extends [infer F]
    ? F extends string | number | symbol
      ? // T 有 F 这个属性（包括交叉类型的情况）
        F extends keyof T
        ? // 使用 Omit 移除 F，然后添加可选的 F
          Omit<T, F> & {
            [P in F]?: T[P]
          }
        : // 处理交叉类型：如果 F 不在 T 的直接键中，但在交叉类型的某个部分中
          // 先提取 F 的类型，然后创建新类型
          T extends infer U
          ? U extends object
            ? F extends keyof U
              ? Omit<U, F> & {
                  [P in F]?: U[F]
                }
              : T
            : T
          : T
      : // T 是数组，则递归处理数组元素
        T extends Array<infer U>
        ? Array<DeepOptional<U, K>>
        : T
    : // K 还有剩余路径，继续递归
      K extends [infer F, ...infer R]
      ? F extends string | number | symbol
        ? // T 有 F 这个属性
          F extends keyof T
          ? {
              [P in keyof T]: P extends F
                ? // 继续递归
                  DeepOptional<
                    T[P],
                    Extract<R, Array<string | number | symbol>>
                  >
                : T[P]
            }
          : // T 是数组，则递归处理数组元素
            T extends Array<infer U>
            ? Array<DeepOptional<U, K>>
            : T
        : T
      : T

export default DeepOptional
