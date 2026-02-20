/**
 * 测试函数
 * @param name 名字
 * @param age 年龄
 * @returns 返回名字和年龄
 */
const fn = (name: string, age: number) => {
  return {
    name,
    age,
  }
}

export default fn

/**
 * 测试类
 */
export class cls {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  /**
   * 测试方法
   * @param name 名字
   * @param age 年龄
   * @returns 返回名字和年龄
   */
  fn(name: string, age: number) {
    return {
      name,
      age,
    }
  }
}

/**
 * 测试对象
 */
export const obj = {
  name: 'test',
  age: 18,
}

/**
 * 测试枚举
 */
export enum enm {
  /**
   * 测试枚举值 A
   */
  A = 'A',
  /**
   * 测试枚举值 B
   */
  B = 'B',
}

/**
 * 测试接口
 */
export interface inter {
  /**
   * 名字
   */
  name: string
  /**
   * 年龄
   */
  age: number
}

/**
 * 测试类型
 */
export type IType = string | number
