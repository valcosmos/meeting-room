import { UserOutlined } from '@ant-design/icons'
import { Outlet } from 'react-router-dom'


export function Index() {
  return (
    <div className='flex flex-col h-100vh'>
      <div className="flex items-center justify-between h-20 px-5 text-3xl border-b border-dashed border-b-indigo-600">
        <h1>会议室预定系统-后台管理</h1>
        <UserOutlined className="icon" />
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  )
}
