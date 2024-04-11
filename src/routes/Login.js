import React from 'react'
import { Layout, Col, Row, Image } from "antd"
import LoginForm from '../components/LoginForm'
import logo from '../assets/logo.png'

const { Content } = Layout

const Home = () => {
  return (
    <Content className='Login'>
      <Row className='Grid'>
        <Col span={12} className="col-2">
          <Content className="col-2-body">
            <h1>Create an account</h1>
            <p>
              Let's get started with your 30 day free trial.
            </p>
            <LoginForm/>
            {/*<p> Already have an account? <a href="/signin">Sign In</a> </p>*/}
          </Content>
        </Col>
        <Col span={12} className="col-1">
          <div className='wrapper'>
              <Image src={logo} preview={false} alt="Logo Hololyze"/>
          </div>
        </Col>
      </Row>
    </Content>
  )
}
export default Home