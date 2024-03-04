import './App.css';
import CustomCarousel from './components/Carousel';
import Categories from './components/Categories';

import React from 'react';
import { AppstoreOutlined, BarChartOutlined, CloudOutlined, ShopOutlined,
  TeamOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items}
          style={{ flex: 1, minWidth: 0 }}/>
      </Header>
      <Layout>
      <Sider style={{ overflow: 'auto' }}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Content style={{ overflow: 'initial' }}>
          <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
            <CustomCarousel/>
            <h2>Tecnología</h2>
            <Categories></Categories>
            <h2>Cuidado personal</h2>
            <Categories></Categories>
            <h2>Mascotas</h2>
            <Categories></Categories>
            <h2>Ropa</h2>
            <Categories></Categories>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
