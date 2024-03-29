import { Outlet, useLocation } from 'react-router-dom'
import { Menu as AntdMenu, MenuProps } from 'antd'
import { router } from '../../main'


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

export function Menu () {
  const handleMenuItemClick: MenuProps['onClick'] = (info) => {
    let path = ''
    switch (info.key) {
      case '1':
        path = '/meeting_room_manage'
        break
      case '2':
        path = '/booking_manage'
        break
      case '3':
        path = '/user_manage'
        break
      case '4':
        path = '/statistics'
        break
    }
    router.navigate(path)
  }

  const location = useLocation()

  function getSelectedKeys() {
    if (location.pathname === '/user_manage') {
      return ['3']
    } else if (location.pathname === '/booking_manage') {
      return ['2']
    } else if (location.pathname === '/meeting_room_manage') {
      return ['1']
    } else if (location.pathname === '/statistics') {
      return ['4']
    } else {
      return ['1']
    }
  }


  return (
    <div className='flex'>
      <div className="w-52">
        <AntdMenu defaultSelectedKeys={getSelectedKeys()} onClick={handleMenuItemClick} items={items} />
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  )
}
