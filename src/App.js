import React from 'react';
import { UserOutlined, HomeOutlined, SettingOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import CustomCarousel from './components/Carousel'
import InputURL from './components/InputURL'
import Navigation from './components/Navigation';

const { Header, Content, Footer, Sider } = Layout;
const names = ["Home", "Login", "Preferences", "About us"]
const items = [HomeOutlined, UserOutlined, SettingOutlined, InfoCircleOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `${names[index]}`,
  }),
);

const App = () => {
  return (
    <Layout>
      <Header>
        <Navigation></Navigation>
      </Header>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
        <Content style={{ margin: '24px 16px 0', minHeight: "86vh"}}>
          <CustomCarousel></CustomCarousel>
          <h2>URL</h2>
          <InputURL></InputURL>
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center', background:'black', color:'white'}}>
            Created by Eduardo & Óscar ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};
export default App;