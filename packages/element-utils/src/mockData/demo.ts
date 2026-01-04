import createMockData from '.'

// 创建 Mock 数据生成器
const mockData = createMockData({
  count: 10,
  schema: {
    id: { type: 'increment', start: 1 },
    uuid: { type: 'uuid' },
    name: { type: 'string', minLength: 2, maxLength: 5, charset: 'chinese' },
    age: { type: 'number', min: 18, max: 60 },
    email: { type: 'email' },
    phone: { type: 'phone' },
    avatar: { type: 'image', width: 100, height: 100 },
    isActive: { type: 'boolean', probability: 0.8 },
    role: { type: 'enum', values: ['admin', 'user', 'guest'] },
    createdAt: { type: 'date', format: 'iso' },
    score: { type: 'number', min: 0, max: 100, decimals: 2 },
    bio: { type: 'paragraph', minSentences: 2, maxSentences: 4 },
    tags: {
      type: 'array',
      itemRule: { type: 'string', minLength: 3, maxLength: 8 },
      minLength: 2,
      maxLength: 5,
    },
    address: {
      type: 'object',
      properties: {
        city: { type: 'string', minLength: 2, maxLength: 4, charset: 'chinese' },
        street: { type: 'string', minLength: 5, maxLength: 15 },
        zipCode: { type: 'string', minLength: 6, maxLength: 6, charset: 'numeric' },
      },
    },
    customField: {
      type: 'custom',
      generator: (index) => `custom-${index}`,
    },
  },
})

// 生成单条数据
const singleData = mockData.generateOne()
console.log('单条数据:', singleData)

// 生成多条数据
const multipleData = mockData.generateMany(5)
console.log('多条数据:', multipleData)

// 重置自增计数器
mockData.reset()
