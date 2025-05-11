# Grid 栅格布局

## 组件构成
- `<Row>` 行容器
- `<Col>` 列容器

## Row 属性
| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|-----|
| gutter | number \| [number, number] | 0 | 栅格间隔，支持横向或[横向, 纵向]格式（单位px） |
| align | 'start' \| 'center' \| 'end' \| 'stretch' | 'start' | 垂直对齐方式 |
| justify | 'start' \| 'center' \| 'end' \| 'space-around' \| 'space-between' | 'start' | 水平排列方式 |

## Col 属性
| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|-----|
| span | number | - | 栅格占位格数 |
| offset | number | 0 | 栅格左侧的间隔格数 |

## 上下文机制
通过RowContext自动向下传递gutter值，Col组件会自动获取最近的Row容器的gutter配置

## 使用示例
```tsx
import { Row, Col } from '@/components/Grid';

export default () => (
  <Row gutter={[16, 24]} align="center" justify="space-between">
    <Col span={6}>column-6</Col>
    <Col span={6} offset={2}>column-6</Col>
    <Col span={6}>column-6</Col>
  </Row>
);
```