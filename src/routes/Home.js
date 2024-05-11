import React from 'react'
import { Layout } from 'antd'
import CustomCarousel from '../components/Carousel'
import InputURL from '../components/InputURL'
import '../index.css'

const { Content } = Layout

const Home = () => {
  return (
    <Layout className='ContentLayout'>
    <Content className='Content'>
      <CustomCarousel/>
      <InputURL/>
    </Content>
    </Layout>
  )
}
export default Home