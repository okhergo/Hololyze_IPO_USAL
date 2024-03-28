import React from 'react';
import { Button, Form, Input, message, Space } from 'antd';

const InputURL = () => {
  const [form] = Form.useForm();
  const onFinish = () => {
    message.success('Submit success!');
  };
  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

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
        <Input placeholder="Input URL" />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button className='Button' type="primary" htmlType="submit">
            HOLOGRAPH IT!
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default InputURL;