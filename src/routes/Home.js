import React from 'react';
import { Layout } from 'antd';
import CustomCarousel from '../components/Carousel'
import InputURL from '../components/InputURL'

const { Content } = Layout;

const Home = () => {
  return (
    <Content style={{fontFamily: "N27 Regular", margin: '24px 16px 0', minHeight: "86vh"}}>
      <CustomCarousel></CustomCarousel>
      <h2>URL</h2>
      <InputURL></InputURL>
    </Content>
  );
};
export default Home;