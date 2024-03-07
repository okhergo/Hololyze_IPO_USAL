import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import CustomCarousel from './components/Carousel'
import Categories from './components/Categories'
import Navigation from './components/Navigation';

const { Header, Content, Footer, Sider } = Layout;
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
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
        <Layout>
          <Content style={{ margin: '24px 16px 0' }}>
            <CustomCarousel></CustomCarousel>
            <Categories></Categories>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Created by Eduardo & Óscar ©{new Date().getFullYear()}
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;