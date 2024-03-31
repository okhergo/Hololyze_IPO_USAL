import React from 'react'
import { Button, Form, Input, message, Space } from 'antd'

import logo from '../assets/logo/Simbolo/Azul.webp'

const InputURL = () => {
  const [form] = Form.useForm()
  const onFinish = () => {
    message.success('Submit success!')
  }
  const onFinishFailed = () => {
    message.error('Submit failed!')
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="Link"
        rules={[
          {
            required: true,
          },
          {
            type: 'url',
          },
          {
            type: 'string',
            min: 6,
          },
        ]}
      >
        <Input className='Input' placeholder="Input URL" />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button className='Button' type="primary" htmlType="submit">
            <img src={logo} alt="Holograph it!"/>
            <h2 id='h2'>Holograph it!</h2>
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default InputURL;