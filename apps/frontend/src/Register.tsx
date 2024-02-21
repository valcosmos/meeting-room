import { Button, Form, Input, message } from 'antd'
import { login, register, registerCaptcha } from './interfaces'
import { useForm } from 'antd/es/form/Form'
import { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export interface RegisterUser {
  username: string
  nickName: string
  password: string
  confirmPassword: string
  email: string
  captcha: string
}

const onFinish = async (values: RegisterUser) => {
  const res = await login(values.username, values.password)

  const { code, message: msg, data } = res.data
  if (res.status === 201 || res.status === 200) {
    message.success('登录成功')

    localStorage.setItem('access_token', data.accessToken)
    localStorage.setItem('refresh_token', data.refreshToken)
    localStorage.setItem('user_info', JSON.stringify(data.userInfo))

    setTimeout(() => {
      navigate('/')
    }, 1000)
  } else {
    message.error(data || '系统繁忙，请稍后再试')
  }
}

const layout1 = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
}

const layout2 = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 }
}

export function Register() {
  const [form] = useForm()
  const navigate = useNavigate()

  const onFinish = useCallback(async (values: RegisterUser) => {
    if (values.password !== values.confirmPassword) {
      return message.error('两次密码不一致')
    }
    const res = await register(values)

    if (res.status === 201 || res.status === 200) {
      message.success('注册成功')
      setTimeout(() => {
        navigate('/login')
      }, 1500)
    } else {
      message.error(res.data.data || '系统繁忙，请稍后再试')
    }
  }, [])

  const sendCaptcha = useCallback(async function () {
    const address = form.getFieldValue('email')
    if (!address) {
      return message.error('请输入邮箱地址')
    }

    const res = await registerCaptcha(address)
    if (res.status === 201 || res.status === 200) {
      message.success(res.data.data)
    } else {
      message.error(res.data.data || '系统繁忙，请稍后再试')
    }
  }, [])

  return (
    <div className="w-96 mx-auto mt-28 space-y-10">
      <h1 className="text-3xl text-center">会议室预订系统</h1>
      <Form form={form} {...layout1} onFinish={onFinish} colon={false} autoComplete="off">
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="昵称"
          name="nickName"
          rules={[{ required: true, message: '请输入昵称!' }]}
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

        <Form.Item
          label="确认密码"
          name="confirmPassword"
          rules={[{ required: true, message: '请输入确认密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            { required: true, message: '请输入邮箱!' },
            { type: 'email', message: '请输入合法邮箱地址!' }
          ]}
        >
          <Input />
        </Form.Item>

        <div className="flex justify-end">
          <Form.Item
            label="验证码"
            name="captcha"
            rules={[{ required: true, message: '请输入验证码!' }]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" onClick={sendCaptcha}>
            发送验证码
          </Button>
        </div>

        <Form.Item {...layout2}>
          <div className="flex justify-end">
            已有账号？去<Link to="/login">登录</Link>
          </div>
        </Form.Item>

        <Form.Item {...layout1} label=" ">
          <Button className="w-full" type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
