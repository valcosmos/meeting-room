import { Button, Form, Input, message } from 'antd'
import { login } from './interface'


interface LoginUser {
  username: string
  password: string
}



const layout1 = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
}

const layout2 = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 }
}

export function Login () {
  const [messageApi, contextHolder] = message.useMessage()
  const onFinish = async (values: LoginUser) => {
    const res = await login(values.username, values.password)

    const { code, message: msg, data } = res.data

    if (res.status === 201 || res.status === 200) {
      messageApi.success('登录成功')
      localStorage.setItem('access_token', data.accessToken)
      localStorage.setItem('refresh_token', data.refreshToken)
      localStorage.setItem('user_info', JSON.stringify(data.userInfo))
      console.log(res.data)
    } else {
      messageApi.error(res.data.data || '系统繁忙，请稍后再试')
    }
  }

  return (
    <>
      {contextHolder}

      <div className="w-96 mx-auto mt-28 text-center space-y-12">
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
    </>
  )
}
