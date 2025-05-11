# Layout 布局组件

## 组件概述
提供页面基础布局容器，支持嵌套以下子组件：
- `<Layout.Header>` 顶部导航区域
- `<Layout.Sider>` 侧边栏区域
- `<Layout.Content>` 内容区域
- `<Layout.Footer>` 底部区域

## Props 定义

### Layout
| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|-----|
| ...BaseProps | - | - | 继承基础组件属性 |

### Header
| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|-----|
| ...BaseProps | - | - | 继承基础组件属性 |

### Sider
| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|-----|
| ...BaseProps | - | - | 继承基础组件属性 |

## 使用示例

### 基础布局
```tsx
import Layout from '@/components/Layout'

export default () => (
  <Layout>
    <Layout.Header>Header</Layout.Header>
    <Layout.Content>Content</Layout.Content>
    <Layout.Footer>Footer</Layout.Footer>
  </Layout>
)
```

### 带侧边栏布局
```tsx
import Layout from '@/components/Layout'

export default () => (
  <Layout>
    <Layout.Header>Header</Layout.Header>
    <Layout>
      <Layout.Sider>Sider</Layout.Sider>
      <Layout.Content>Content</Layout.Content>
    </Layout>
    <Layout.Footer>Footer</Layout.Footer>
  </Layout>
)
```
