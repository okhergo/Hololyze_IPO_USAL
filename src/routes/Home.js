import React from 'react'
import { Layout } from 'antd'
import CustomCarousel from '../components/Carousel'
import InputURL from '../components/InputURL'
import '../index.css'

const { Content } = Layout

const Home = () => {
  return (
    <Content className='Content'>
      <CustomCarousel/>
      <h2>URL</h2>
      <InputURL/>
    </Content>
  )
}
export default Home