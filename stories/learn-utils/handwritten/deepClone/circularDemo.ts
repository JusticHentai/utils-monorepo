import deepClone from '../../../../packages/learn-utils/src/handwritten/deepClone'

const circularDemo = () => {
  // 测试循环引用
  const obj: any = {
    name: '循环引用测试',
    data: {
      value: 100,
    },
  }
  obj.self = obj // 创建循环引用

  const cloned = deepClone(obj)

  return {
    original: '包含循环引用的对象',
    clonedName: cloned.name,
    hasCircular: cloned.self === cloned,
    message: '成功处理循环引用',
  }
}

export default circularDemo
