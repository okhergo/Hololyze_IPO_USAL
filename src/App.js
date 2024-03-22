import React from 'react';
import { UserOutlined, HomeOutlined, SettingOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import CustomCarousel from './components/Carousel'
import InputURL from './components/InputURL'
import logo from './assets/logo.png'

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
      <Header style={{backgroundColor:'#090082', position:'relative', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <img src={logo} alt="Logo Hololyze" style={{height:20}}></img>;
      </Header>
      <Layout style={{backgroundColor: '#f8f8f8'}} >
        <Sider style={{backgroundColor: 'white'}}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Menu theme='light' mode="inline" items={items} />
        </Sider>
        <Content style={{margin: '24px 16px 0', minHeight: "86vh"}}>
          <CustomCarousel></CustomCarousel>
          <h2>URL</h2>
          <InputURL></InputURL>
        </Content>
      </Layout>
      <Footer style={{backgroundColor:'#090082', color:'#ffffff', textAlign: 'center', position: 'sticky'}}>
            Created by Eduardo & Óscar ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};
export default App;