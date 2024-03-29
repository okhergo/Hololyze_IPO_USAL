import React from 'react'
import { Layout } from 'antd'

const { Content } = Layout

const ErrorPage = () => {
  return (
    <Content className='Error'>
        <h1>ERROR 404:</h1>
        <h2>Page not found</h2>
    </Content>
  )
}
export default ErrorPage