import React from 'react'
import { Layout, Col, Row, Image } from "antd"
import LoginForm from '../components/LoginForm'

const { Content } = Layout

const Home = () => {
  return (
    <Content className='Content'>
      <Row className='Grid'>
        <Col span={12} className="col-1">
          <Image src="bg.png" preview={false} className="Image" />
        </Col>
        <Col span={12} className="col-2">
          <Content className="col-2-body">
            <h1>Create an account</h1>
            <p>
              Let's get started with your 30 day free trial.
            </p>
            <LoginForm/>
            <p>
              Already have an account?
            </p>
          </Content>
        </Col>
      </Row>
    </Content>
  )
}
export default Home