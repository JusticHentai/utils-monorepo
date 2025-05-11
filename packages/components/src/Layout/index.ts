// Layout 组件容器
// 提供页面基础布局能力，支持嵌套 Header/Sider/Content/Footer 子组件
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import LayoutComponent from './components/Layout'
import Sider from './components/Sider'

const Layout = LayoutComponent as typeof LayoutComponent & {
  Sider: typeof Sider
  Content: typeof Content
  Header: typeof Header
  Footer: typeof Footer
}

Layout.Sider = Sider
Layout.Content = Content
Layout.Header = Header
Layout.Footer = Footer

export default Layout
