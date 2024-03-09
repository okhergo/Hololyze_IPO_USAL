import React from 'react';
import { Layout } from 'antd';

const {Content} = Layout;

const ErrorPage = () => {
  return (
    <Layout style={{fontFamily: "N27 Regular"}}>
      <Layout style={{backgroundColor: '#f8f8f8'}} >
        <Content style={{margin: '24px 16px 0', minHeight: "86vh"}}>
          <h1>ERROR 404:</h1>
          <h2>Page not found</h2>
        </Content>
      </Layout>
    </Layout>
  );
};
export default ErrorPage;