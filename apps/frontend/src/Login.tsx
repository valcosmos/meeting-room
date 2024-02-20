import { Button, Form, Input } from 'antd'


interface LoginUser {
  username: string
  password: string
}

const onFinish = (values: LoginUser) => {
  console.log(values)
}

const layout1 = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
}

const layout2 = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 }
}

export function Login() {
  return (
    <div className='w-96 mx-auto mt-28 text-center space-y-12'>
      <h1 className="text-3xl">会议室预订系统</h1>
      <Form {...layout1} onFinish={onFinish} colon={false} autoComplete="off">
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...layout2}>
          <div className="flex justify-between">
            <a href="">创建账号</a>
            <a href="">忘记密码</a>
          </div>
        </Form.Item>

        <Form.Item {...layout2}>
          <Button className="w-full" type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
