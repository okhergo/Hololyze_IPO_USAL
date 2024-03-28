import React from 'react'

import { UserOutlined, HomeOutlined, SettingOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Outlet, Link } from "react-router-dom"
import { Layout, Menu } from 'antd'
import logo from './assets/logo.png'

const { Header, Footer, Sider } = Layout

const names = ["Home", "Login", "Preferences", "About us"]
const routes = ["/", "/login", "/preferences", "/about"]
const items = [HomeOutlined, UserOutlined, SettingOutlined, InfoCircleOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: <Link to={routes[index]}>{names[index]}</Link>,
  }),
)

function AppLayout() {
  return (
    <Layout className="Container">
        <Header className="Header">
            <img src={logo} alt="Logo Hololyze" style={{height:30}}></img>
        </Header>
        <Layout className="Container">
            <Sider className="Sidebar" breakpoint="lg" collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}>
                <Menu theme='dark' mode="inline" items={items} />
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