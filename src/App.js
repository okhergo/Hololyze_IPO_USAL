import React,{ useContext } from 'react'

import { UserOutlined, ChromeOutlined, DollarOutlined, HomeOutlined, SettingOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Outlet, Link } from "react-router-dom"
import { Layout, Menu } from 'antd'
import logo from './assets/logo.png'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { ThemeContext } from './contexts/theme'
import LanguageSelector from './components/LanguageSelector'

const { Header, Footer, Sider } = Layout

const names = ["Home", "Our extension", "Pricing", "Preferences", "About us"]
const routes = ["/", "https://chromewebstore.google.com/?hl=es&pli=1", "/pricing", "/preferences", "/about"]
const items = [HomeOutlined, ChromeOutlined, DollarOutlined, SettingOutlined, InfoCircleOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: <Link to={routes[index]}>{names[index]}</Link>,
  }),
)

function AppLayout() {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <Layout className={`Container app ${themeName}`}>
      <Header className="Header">
        <span className='spacer'></span>
        <img src={logo} alt="Logo Hololyze"></img>
        <span className='spacer'></span>

        <div className='menuIcons'>
          <LanguageSelector/>
          <SignedOut>
            <SignInButton>
            < UserOutlined />
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </div>

      </Header>
      <Layout className="Container">
        <Sider className="Sidebar" breakpoint="lg" collapsedWidth="0">
          <Menu className="Sidebar" theme='dark' mode="inline" items={items} />
        </Sider>
        <Outlet />
      </Layout>
      <Footer className="Footer">
        Created by Eduardo & Óscar ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  )
}
export default AppLayout