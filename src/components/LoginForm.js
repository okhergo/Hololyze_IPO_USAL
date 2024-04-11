import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { SignedOut, SignInButton } from '@clerk/clerk-react'

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
function LoginForm(){
    return(
    <Form name="loginform" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
        <h2>Username</h2>
        <Form.Item placeholder="Username" name="username"
         rules={[ { required: true, message: 'Please input your username!' } ]}>
            <Input />
        </Form.Item>
        <h2>Password</h2>
        <Form.Item placeholder="Password" name="password"
         rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" >
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
            <div className='loginButtons'>
            <SignedOut>
                <SignInButton>
                <input type="button" value={'Login with Clerk'} />
            </SignInButton>
            </SignedOut>

            <Button type="primary" htmlType="submit"> LogIn </Button>
            </div>
        </Form.Item>
    </Form>
    )
}
export default LoginForm;