import { Outlet } from 'react-router-dom'
import { Menu as AntdMenu, MenuProps } from 'antd'


const items: MenuProps['items'] = [
  {
    key: '1',
    label: '会议室管理'
  },
  {
    key: '2',
    label: '预定管理'
  },
  {
    key: '3',
    label: '用户管理'
  },
  {
    key: '4',
    label: '统计'
  }
]

export function Menu() {
  return (
    <div className='flex'>
      <div className="w-52">
        <AntdMenu defaultSelectedKeys={['3']} items={items} />
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  )
}
