import deepClone from '../../../../packages/learn-utils/src/handwritten/deepClone'

const normalDemo = () => {
  const obj = {
    name: '张三',
    age: 25,
    address: {
      city: '北京',
      district: '朝阳区',
    },
    hobbies: ['读书', '游泳', '编程'],
    date: new Date(),
  }

  const cloned = deepClone(obj)

  // 验证深拷贝：修改原对象不影响克隆对象
  obj.address.city = '上海'
  obj.hobbies.push('跑步')

  return {
    original: obj,
    cloned: cloned,
    isDeepClone: obj.address !== cloned.address,
  }
}

export default normalDemo
