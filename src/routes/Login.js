import React from 'react';
import { Layout } from 'antd';
import LoginForm from '../components/LoginForm'

const { Content } = Layout;

const Home = () => {
  return (
    <Content style={{margin: '24px 16px 0', minHeight: "86vh"}}>
      <LoginForm></LoginForm>
    </Content>
  );
};
export default Home;